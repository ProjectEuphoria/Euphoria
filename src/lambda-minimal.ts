import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// Simple persona definitions
const personas = {
  Helena: { name: 'Helena', description: 'Calm mentor who brings order to chaos' },
  Luna: { name: 'Luna', description: 'Sarcastic best friend with tough love' },
  Milo: { name: 'Milo', description: 'Chaos gremlin of optimism and humor' },
  Kai: { name: 'Kai', description: 'Older-brother coach with discipline' },
  Sophie: { name: 'Sophie', description: 'Cozy study buddy with gentle plans' },
};

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
          personas: Object.keys(personas),
          version: '1.0.0',
        }),
      };
    }

    // List personas
    if (path === '/api/personas' && httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ personas }),
      };
    }

    // Chat endpoint
    if (path.startsWith('/api/chat/') && httpMethod === 'POST') {
      const personaName = path.split('/')[3] as keyof typeof personas;
      const persona = personas[personaName];
      
      if (!persona) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ 
            error: 'Persona not found',
            available: Object.keys(personas)
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

      // Generate a simple response based on persona
      const responses = {
        Helena: `*adjusts glasses thoughtfully* I hear you saying "${message}". Let's break this down step by step and find a clear path forward.`,
        Luna: `*rolls eyes* Oh, "${message}"? Really? Well, here's what I actually think about that...`,
        Milo: `*bounces excitedly* OMG YES! "${message}" - that's AMAZING! Let's turn this into something epic!`,
        Kai: `*nods firmly* "${message}". Got it. Here's what we're going to do. Focus. Execute. Results.`,
        Sophie: `*smiles warmly* I understand you're sharing "${message}" with me. Let's explore this together, shall we?`,
      };

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          persona: personaName,
          response: responses[personaName],
          timestamp: new Date().toISOString(),
          mood: 'base',
        }),
      };
    }

    // Default response
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
