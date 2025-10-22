import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { synthesizePollySpeech } from "./polly.js";
import type { PersonaKey } from "./types.js";

const personaValues: readonly PersonaKey[] = ["Sophie", "Luna", "Helena", "Kai", "Milo"] as const;
const contourValues = ["encouraging", "serene", "composed", "dynamic", "grounded", "neutral"] as const;
const sentimentValues = ["pos", "neg", "excited", "calm", "serious"] as const;

const RequestSchema = z.object({
  persona: z.enum(personaValues),
  text: z.string().min(1).max(1500),
  style: z.enum(contourValues).optional(),
  sentiment: z.enum(sentimentValues).optional(),
  seed: z.number().int().optional(),
});

export default async function ttsRoute(app: FastifyInstance) {
  app.post("/tts", async (req, reply) => {
    try {
      const parsed = RequestSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({
          ok: false,
          error: "Invalid input",
          details: parsed.error.flatten(),
        });
      }

      const result = await synthesizePollySpeech(parsed.data);

      reply.type("application/json").send({
        ok: true,
        contentType: result.contentType,
        audio: result.buffer.toString("base64"),
        meta: result.meta,
      });
    } catch (error: any) {
      req.log.error({ err: error }, "Polly TTS failed");
      return reply.code(500).send({
        ok: false,
        error: error?.message ?? "Polly synthesis failed",
      });
    }
  });
}
