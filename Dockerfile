# syntax=docker/dockerfile:1
FROM node:22.12-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:22.12-slim AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build:client && npm run build:server

FROM node:22.12-slim
WORKDIR /app
ENV NODE_ENV=production PORT=8080 HOST=0.0.0.0
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/config ./config
COPY --from=build /app/package.json ./package.json
EXPOSE 8080
CMD ["node", "dist/api/http.server.js"]
