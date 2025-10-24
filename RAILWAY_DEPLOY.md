# Deploy EUPHORIA @iqai/adk API to Railway

## Quick Deploy (5 minutes)

### 1. Create Railway Account
- Go to https://railway.app
- Sign up with GitHub

### 2. Deploy from GitHub
- Click "New Project" 
- Select "Deploy from GitHub repo"
- Connect this repository
- Railway will auto-detect Node.js and deploy

### 3. Set Environment Variables
In Railway dashboard, go to Variables tab and add:
```
NODE_ENV=production
PORT=8080
GOOGLE_API_KEY=AIzaSyAFxGi7YbuHs2QVmDYZ5zhKvHPp50PpBmg
COOKIE_SECRET=86bc0d7e213a6f0ef3ab7c0cff2eefa9abb4fb8355e3df01
```

### 4. Test Deployment
Railway will give you a URL like: `https://euphoria-production.up.railway.app`

Test endpoints:
- `GET /adk/api/health` - Health check
- `POST /adk/agents/Helena/ask` - Chat with Helena
- `POST /adk/agents/Milo/ask` - Chat with Milo

## Alternative: CLI Deploy

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up

# Set environment variables
railway variables set NODE_ENV=production
railway variables set GOOGLE_API_KEY=AIzaSyAFxGi7YbuHs2QVmDYZ5zhKvHPp50PpBmg
railway variables set COOKIE_SECRET=86bc0d7e213a6f0ef3ab7c0cff2eefa9abb4fb8355e3df01
```

## Expected Result
- Full @iqai/adk functionality working
- Real AI agent responses (not hardcoded)
- All MCP tools and persona features
- Cost: ~$5/month

## Update Frontend
Once deployed, update your frontend API config to point to the Railway URL instead of Lambda.
