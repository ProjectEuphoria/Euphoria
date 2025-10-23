import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Helena } from './agents/Helena/agent.js';
import { Luna } from './agents/Luna/agent.js';
import { Milo } from './agents/Milo/agent.js';
import { Kai } from './agents/Kai/agent.js';
import { Sophie } from './agents/Sophie/agent.js';

const agents = { Helena, Luna, Milo, Kai, Sophie };

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

    if (httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers, body: '' };
    }

    if (path === '/api/health' || path === '/') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: 'healthy',
          service: 'EUPHORIA',
          timestamp: new Date().toISOString(),
          personas: Object.keys(agents),
          version: '2.0.0-adk',
        }),
      };
    }

    if (path === '/api/personas' && httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ personas: Object.keys(agents) }),
      };
    }

    if (path.startsWith('/api/chat/') && httpMethod === 'POST') {
      const personaName = path.split('/')[3] as keyof typeof agents;
      const agent = agents[personaName];
      
      if (!agent) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ 
            error: 'Persona not found',
            available: Object.keys(agents)
          }),
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

      // Use the actual agent
      const response = await agent.ask(message);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          persona: personaName,
          response: response.reply || response.error || 'No response',
          timestamp: new Date().toISOString(),
          mood: 'base',
        }),
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ 
        error: 'Not found', 
        path, 
        method: httpMethod,
        availableEndpoints: [
          'GET /api/health',
          'GET /api/personas', 
          'POST /api/chat/{persona}'
        ]
      }),
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
