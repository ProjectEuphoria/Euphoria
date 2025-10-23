#!/bin/bash
set -e

echo "🚀 Deploying EUPHORIA to AWS App Runner..."

# Build and push to ECR
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.ap-south-1.amazonaws.com

# Build Docker image
docker build -t euphoria .

# Tag for ECR
docker tag euphoria:latest 123456789012.dkr.ecr.ap-south-1.amazonaws.com/euphoria:latest

# Push to ECR
docker push 123456789012.dkr.ecr.ap-south-1.amazonaws.com/euphoria:latest

echo "✅ Image pushed to ECR"
echo "Now create App Runner service in AWS Console pointing to this ECR image"
