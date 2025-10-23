var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lambda-minimal.ts
var lambda_minimal_exports = {};
__export(lambda_minimal_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(lambda_minimal_exports);
var personas = {
  Helena: { name: "Helena", description: "Calm mentor who brings order to chaos" },
  Luna: { name: "Luna", description: "Sarcastic best friend with tough love" },
  Milo: { name: "Milo", description: "Chaos gremlin of optimism and humor" },
  Kai: { name: "Kai", description: "Older-brother coach with discipline" },
  Sophie: { name: "Sophie", description: "Cozy study buddy with gentle plans" }
};
var handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  };
  try {
    const { path, httpMethod } = event;
    const body = event.body ? JSON.parse(event.body) : {};
    if (httpMethod === "OPTIONS") {
      return { statusCode: 200, headers, body: "" };
    }
    if (path === "/api/health" || path === "/") {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: "healthy",
          service: "EUPHORIA",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          personas: Object.keys(personas),
          version: "1.0.0"
        })
      };
    }
    if (path === "/api/personas" && httpMethod === "GET") {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ personas })
      };
    }
    if (path.startsWith("/api/chat/") && httpMethod === "POST") {
      const personaName = path.split("/")[3];
      const persona = personas[personaName];
      if (!persona) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({
            error: "Persona not found",
            available: Object.keys(personas)
          })
        };
      }
      const { message } = body;
      if (!message) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: "Message is required" })
        };
      }
      const responses = {
        Helena: `*adjusts glasses thoughtfully* I hear you saying "${message}". Let's break this down step by step and find a clear path forward.`,
        Luna: `*rolls eyes* Oh, "${message}"? Really? Well, here's what I actually think about that...`,
        Milo: `*bounces excitedly* OMG YES! "${message}" - that's AMAZING! Let's turn this into something epic!`,
        Kai: `*nods firmly* "${message}". Got it. Here's what we're going to do. Focus. Execute. Results.`,
        Sophie: `*smiles warmly* I understand you're sharing "${message}" with me. Let's explore this together, shall we?`
      };
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          persona: personaName,
          response: responses[personaName],
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          mood: "base"
        })
      };
    }
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({
        error: "Not found",
        path,
        method: httpMethod,
        availableEndpoints: [
          "GET /api/health",
          "GET /api/personas",
          "POST /api/chat/{persona}"
        ]
      })
    };
  } catch (error) {
    console.error("Lambda error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
      })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
