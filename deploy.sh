#!/bin/bash
set -e

echo "🏗️  Building for production..."
npm run build

echo "📦 Creating deployment package..."
zip -r euphoria-deploy.zip . -x "node_modules/*" ".git/*" "src/*" "*.log"

echo "🚀 Ready for Beanstalk deployment!"
echo "Upload euphoria-deploy.zip to Elastic Beanstalk"
