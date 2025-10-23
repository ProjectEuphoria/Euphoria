# Euphoria AWS Deployment Blueprint

> Amazon Polly is already wired up in the Fastify layer. Follow the steps below without changing or redeploying the Polly integration.

## 1. Environment Prep

- **Region**: Prefer `ap-south-1`. Request ACM certs for CloudFront in `us-east-1`.
- **IAM**: Create one deployer user (CLI or CI) and one Elastic Beanstalk instance profile with S3 read-only and Secrets Manager access.
- **Networking**: Define VPC subnets for Elastic Beanstalk and RDS. Keep private subnets for RDS.

## 2. Repository Mapping

- **Frontend**: Build Vite output into `dist/` and publish to S3.
- **Backend**: Deploy `src/api` to Elastic Beanstalk (Node.js 20+ platform).
- **Agents / MCP**: Bundled with backend build; no extra packaging.
- **Polly**: Already functional. Do **not** modify `src/api/tts/*` or reconfigure voice settings.

## 3. Frontend Delivery (S3 + CloudFront)

1. Create an S3 bucket (block public access enabled).
2. Enable versioning and server-side encryption (SSE-S3).
3. Configure CloudFront with an Origin Access Control (OAC) pointing to the bucket.
4. Add Cache Policy:
   - `index.html`: TTL `0-60s` (managed policy or custom).
   - Static assets (`assets/*`, `*.js`, `*.css`): long TTL (`1h-24h`).
5. Build locally with `npm run build`.
6. Upload assets: `aws s3 sync dist/ s3://<bucket-name>/ --delete`.
7. Create an ACM certificate in `us-east-1` for the CloudFront domain; validate DNS.
8. Attach the certificate and enforce HTTPS (viewer protocol policy).
9. Point Route 53 `A`/`AAAA` records at the CloudFront distribution (ALIAS).

## 4. Backend Hosting (Elastic Beanstalk)

1. Ensure Fastify listens on `process.env.PORT || 8080` (already true).
2. Create an Elastic Beanstalk application + environment (Node.js platform).
3. Generate a ZIP artifact that contains:
   - `package.json`, `package-lock.json`.
   - `src/`, `tsconfig*.json`.
   - `dist/` if pre-built, or rely on EB build commands.
4. Add `.ebextensions/` if you need platform hooks (optional).
5. Configure environment variables:
   - `NODE_ENV=production`
   - `PORT=8080`
   - `API_PORT=8080` (optional fallback)
   - `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
   - `CORS_ORIGINS=https://app.example.com,https://admin.example.com`
   - `COOKIE_SECRET=<random-string>`
   - `EDGE_SECRET=<value shared with CloudFront behavior>`
   - Any persona tokens, AI keys, etc.
6. Assign the instance profile with minimal S3 and Secrets Manager access.
7. Turn on enhanced health reporting. Health check path `/health`.
8. Enable CloudWatch Logs streaming and log retention policies.

## 5. Database (Amazon RDS for MariaDB)

1. Launch MariaDB (e.g., db.t4g.micro) in private subnets.
2. Security groups:
   - RDS SG allows inbound `3306` only from EB instance SG.
   - EB SG allows outbound `3306` to RDS SG.
3. Enable automatic backups (7+ days) and Multi-AZ if required.
4. Store DB credentials in Secrets Manager or SSM Parameter Store.
5. Run schema migrations from a bastion host or EB instance (e.g., SQL scripts or ORM).

## 6. CloudFront → API Origin Routing

1. Add Elastic Beanstalk (Application Load Balancer endpoint) as a second origin.
2. Create a behavior for `/adk/*` (or `/api/*` if preferred):
   - Origin: EB ALB.
   - Viewer protocol: HTTPS only.
   - Cache policy: disable caching (managed `CachingDisabled`).
   - Origin request policy: forward all headers, cookies, and query strings.
3. Create a custom header `X-Edge-Auth: <EDGE_SECRET>` and validate it in Fastify middleware.
4. Allow WebSockets at the distribution and ALB levels if needed.

## 7. Fastify CORS & Auth Adjustments

- Keep `@fastify/cors` origin list limited to:
  - Configure through `CORS_ORIGINS` env (comma-delimited).
- Set `credentials: true`.
- For cookies, ensure `secure: true` in production and `sameSite: "lax"` or `none` if necessary.
- If you switch to JWTs, forward `Authorization` headers via CloudFront.

## 8. Secrets Management

- Use Secrets Manager/SSM for DB credentials, AI keys, Telegram/Discord tokens.
- Grant EB instance role `secretsmanager:GetSecretValue` access for specific ARNs.
- Load secrets in Fastify through environment variables (e.g., preload script or EB container command).
- Never modify or reupload the Polly configuration unless voice settings change.

## 9. CI/CD Outline

- **Frontend pipeline**:
  1. `npm ci && npm run build`
  2. `aws s3 sync dist/ s3://<bucket>/`
  3. `aws cloudfront create-invalidation --distribution-id XXX --paths "/*"`
- **Backend pipeline**:
  1. `npm ci && npm run build`
  2. Create ZIP (`zip -r ../deploy.zip .`)
  3. `eb deploy` (or AWS CLI `create-application-version` + `update-environment`)
- Keep old EB versions for rollbacks. Ensure Polly files are excluded from CI modifications.

## 10. Monitoring & Safety Nets

- CloudWatch alarms:
  - EB 5xx count, latency, CPU.
  - RDS CPU/storage/free space.
- AWS Budgets for monthly spend (include Polly usage though it stays unchanged).
- GuardDuty and Config for security posture.
- Enable RDS performance insights if needed.
- Consider WAF in front of CloudFront for rate limiting and IP restrictions.

## 11. Cost Snapshot (dev/staging)

- CloudFront + S3: ≈ $5 / month.
- Elastic Beanstalk (single t4g.small): ≈ $15–25 / month.
- RDS db.t4g.micro (MariaDB): ≈ $12–15 / month.
- Route 53 hosted zone + records: ≈ $1 / month.
- Polly pay-per-use (already accounted for; no change).

## 12. Launch Sequence

1. Set up S3 + CloudFront and validate static site.
2. Spin up RDS, load schema, store secrets.
3. Provision Elastic Beanstalk environment with environment variables.
4. Deploy backend build; verify `/health` and `/adk/agents/Helena/ask`.
5. Update CloudFront behaviors and set `EDGE_SECRET`.
6. Point DNS to CloudFront. Run smoke tests (frontend + API + voice).
7. Enable CI/CD pipelines for ongoing deployments.

Following these steps deploys the app end-to-end while leaving the existing Amazon Polly integration untouched.
