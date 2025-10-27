// src/api/adapters/google-ai-adapter.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export interface Tool {
  name: string;
  description: string;
  parameters: any;
  handler: (params: any) => Promise<any>;
}

export interface Runner {
  ask: (input: string) => Promise<string>;
}

export class AgentBuilder {
  private name: string = '';
  private model: string = 'gemini-2.5-flash';
  private instruction: string = '';
  private tools: Tool[] = [];

  static create(name: string): AgentBuilder {
    const builder = new AgentBuilder();
    builder.name = name;
    return builder;
  }

  withModel(modelName: string): AgentBuilder {
    this.model = modelName;
    return this;
  }

  withInstruction(instruction: string): AgentBuilder {
    this.instruction = instruction;
    return this;
  }

  withTools(...tools: Tool[]): AgentBuilder {
    this.tools = tools;
    return this;
  }

  async build(): Promise<{ runner: Runner }> {
    const model = genAI.getGenerativeModel({ 
      model: this.model,
      systemInstruction: this.instruction
    });

    const runner: Runner = {
      ask: async (input: string): Promise<string> => {
        try {
          // Convert tools to Google AI format
          const functionDeclarations = this.tools.map(tool => ({
            name: tool.name,
            description: tool.description,
            parameters: tool.parameters
          }));

          const modelWithTools = functionDeclarations.length > 0 
            ? genAI.getGenerativeModel({ 
                model: this.model,
                systemInstruction: this.instruction,
                tools: [{ functionDeclarations }]
              })
            : model;

          const result = await modelWithTools.generateContent(input);
          const response = result.response;

          // Handle function calls
          if (response.functionCalls && response.functionCalls.length > 0) {
            const functionCall = response.functionCalls[0];
            const tool = this.tools.find(t => t.name === functionCall.name);
            
            if (tool) {
              const toolResult = await tool.handler(functionCall.args || {});
              
              // Send function result back to model
              const followUpResult = await modelWithTools.generateContent([
                { text: input },
                { functionCall: functionCall },
                { functionResponse: { name: functionCall.name, response: toolResult } }
              ]);
              
              return followUpResult.response.text();
            }
          }

          return response.text();
        } catch (error: any) {
          console.error(`[${this.name}] Error:`, error);
          return `I apologize, but I encountered an error: ${error.message}`;
        }
      }
    };

    return { runner };
  }
}
