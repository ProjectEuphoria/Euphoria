import awsLambdaFastify from '@fastify/aws-lambda';
import { app } from './api/http.server.js';

const proxy = awsLambdaFastify(app);

export const handler = proxy;
