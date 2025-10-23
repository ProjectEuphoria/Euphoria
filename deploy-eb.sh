#!/bin/bash
set -e

echo "🔍 Pre-deployment checks..."

# Check if EB is initialized
if [ ! -f ".elasticbeanstalk/config.yml" ]; then
    echo "❌ EB not initialized. Run 'eb init' first"
    exit 1
fi

# Check for required env vars
if [ -z "$GOOGLE_API_KEY" ]; then
    echo "❌ GOOGLE_API_KEY not set. Run:"
    echo "   eb setenv GOOGLE_API_KEY=your_key"
    exit 1
fi

echo "✅ Checks passed"

echo "🏗️  Building application..."
npm run build

echo "📦 Deploying to Beanstalk..."
eb deploy

echo "🎉 Deployment complete!"
echo "Run 'eb open' to view your app"
