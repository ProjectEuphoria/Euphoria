import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import agents from './agents/index.js';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  try {
    const { path, httpMethod } = event;
    const body = event.body ? JSON.parse(event.body) : {};

    // Handle OPTIONS requests
    if (httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers, body: '' };
    }

    // Health check
    if (path === '/api/health' || path === '/') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: 'healthy',
          service: 'EUPHORIA',
          timestamp: new Date().toISOString(),
          personas: Object.keys(agents),
        }),
      };
    }

    // Chat endpoint
    if (path.startsWith('/api/chat/') && httpMethod === 'POST') {
      const personaName = path.split('/')[3];
      const agent = agents[personaName as keyof typeof agents];
      
      if (!agent) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Persona not found' }),
        };
      }

      const { message } = body;
      if (!message) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Message is required' }),
        };
      }

      // Simple response for now - will expand with actual agent logic
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          persona: personaName,
          response: `Hello from ${personaName}! You said: ${message}`,
          timestamp: new Date().toISOString(),
        }),
      };
    }

    // Default response
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not found', path, method: httpMethod }),
    };

  } catch (error) {
    console.error('Lambda error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};
