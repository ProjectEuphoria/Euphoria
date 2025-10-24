# EUPHORIA Production Deployment Guide

## 🚀 Railway Deployment

### Prerequisites
- Railway account connected to GitHub
- Environment variables configured
- Latest code pushed to main branch

### Quick Deploy Steps

1. **Connect Repository**
   ```bash
   # Push latest changes
   git add .
   git commit -m "Production ready deployment"
   git push origin main
   ```

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your EUPHORIA repository
   - Railway will auto-detect and deploy

3. **Configure Environment Variables**
   Set these in Railway dashboard:
   ```
   NODE_ENV=production
   GOOGLE_API_KEY=your_google_api_key
   COOKIE_SECRET=your_secure_random_string
   CORS_ORIGINS=https://euphoria-frontend-2025.s3-website.ap-south-1.amazonaws.com
   ```

### Health Checks
- **API Health**: `https://your-app.up.railway.app/health`
- **Service Health**: `https://your-app.up.railway.app/adk/api/health`

### Expected Response
```json
{
  "status": "healthy",
  "service": "EUPHORIA API",
  "timestamp": "2025-10-24T01:30:00.000Z",
  "personas": ["Helena", "Luna", "Milo", "Kai", "Sophie"]
}
```

## 🔧 Configuration

### Required Environment Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment | `production` |
| `GOOGLE_API_KEY` | Gemini API key | `AIzaSy...` |
| `COOKIE_SECRET` | Session security | `random-string-64-chars` |
| `CORS_ORIGINS` | Allowed origins | `https://domain.com` |

### Optional Variables
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `8080` |
| `LOG_LEVEL` | Logging level | `info` |
| `OPENAI_API_KEY` | OpenAI fallback | - |
| `AWS_*` | TTS support | - |

## 🧪 Testing Deployment

### 1. Health Check
```bash
curl https://your-app.up.railway.app/health
```

### 2. API Test
```bash
curl -X POST https://your-app.up.railway.app/adk/agents/Helena/ask \
  -H "Content-Type: application/json" \
  -d '{"input": "Hello Helena!"}'
```

### 3. Frontend Integration
Update frontend API endpoint to:
```typescript
const API_BASE_URL = 'https://your-app.up.railway.app/adk';
```

## 🔍 Monitoring

### Logs
- Railway provides real-time logs in dashboard
- Structured JSON logging in production
- Error tracking with request IDs

### Metrics
- Health endpoint provides uptime/memory stats
- Railway dashboard shows CPU/memory usage
- Response time monitoring built-in

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (>=18.0.0)
   - Verify all dependencies in package.json
   - Check build logs for missing files

2. **Runtime Errors**
   - Verify environment variables are set
   - Check CORS origins match frontend URL
   - Ensure API keys are valid

3. **Agent Errors**
   - Verify GOOGLE_API_KEY is set and valid
   - Check agent files exist in src/agents/
   - Review logs for specific error messages

### Debug Commands
```bash
# Check environment
curl https://your-app.up.railway.app/version

# Test specific agent
curl -X POST https://your-app.up.railway.app/adk/agents/Luna/ask \
  -H "Content-Type: application/json" \
  -d '{"input": "test"}'
```

## 📈 Scaling

### Performance
- Railway auto-scales based on traffic
- Agents are prewarmed for faster responses
- Static assets served efficiently

### Cost Optimization
- Use `gpt-5-mini` for most interactions
- Enable request logging only in development
- Monitor usage in Railway dashboard

## 🔐 Security

### Best Practices
- Use strong COOKIE_SECRET (64+ random chars)
- Restrict CORS_ORIGINS to known domains
- Enable EDGE_SECRET for additional protection
- Keep API keys secure and rotate regularly

### Production Checklist
- [ ] Environment variables configured
- [ ] CORS origins restricted
- [ ] API keys secured
- [ ] Health checks passing
- [ ] Frontend integration tested
- [ ] Error monitoring enabled
- [ ] Backup deployment strategy ready

---

**Need Help?** Check Railway docs or review CONVERSATION_LOG.md for deployment history.
