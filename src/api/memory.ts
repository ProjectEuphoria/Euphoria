import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { loadUserMemory, saveUserMemory } from "./services/userMemory.js";
import { requireSession } from "../middleware/requireSession.js";
import {
  loadMemoryBundle,
  saveProfile,
  saveSummary,
  addMemoryEntry,
} from "./services/userProfileMemory.js";

const UserIdSchema = z.string().trim().min(1, "userId is required");

const LoadSchema = z.object({
  userId: UserIdSchema,
  persona: z.string().optional(),
});

const SaveSchema = z.object({
  userId: UserIdSchema,
  persona: z.string().optional(),
  data: z.any(),
});

const ProfileSchema = z.object({
  userId: UserIdSchema,
  profile: z.any(),
});

const SummarySchema = z.object({
  userId: UserIdSchema,
  persona: z.string().optional(),
  summary: z.string().max(6000),
});

const MemoryEntrySchema = z.object({
  userId: UserIdSchema,
  persona: z.string().optional(),
  title: z.string().optional(),
  body: z.string().max(2000).optional(),
  tags: z.any().optional(),
});

export default async function memoryRoutes(app: FastifyInstance) {
  app.addHook("preHandler", requireSession);

  app.post("/memory/bundle", async (req, reply) => {
    try {
      const parsed = LoadSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
      }
      const { userId, persona } = parsed.data;
      const bundle = await loadMemoryBundle(userId, persona, 5);
      return reply.send({ ok: true, bundle });
    } catch (error: any) {
      req.log.error({ err: error }, "Memory bundle load failed");
      return reply.code(500).send({ ok: false, error: error?.message ?? "Memory bundle load failed" });
    }
  });

  app.post("/memory/profile", async (req, reply) => {
    const parsed = ProfileSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
    }
    const { userId, profile } = parsed.data;
    try {
      await saveProfile(userId, profile);
      return reply.send({ ok: true });
    } catch (error: any) {
      req.log.error({ err: error }, "Profile save failed");
      return reply.code(500).send({ ok: false, error: error?.message ?? "Profile save failed" });
    }
  });

  app.post("/memory/summary", async (req, reply) => {
    const parsed = SummarySchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
    }
    const { userId, persona, summary } = parsed.data;
    try {
      await saveSummary(userId, persona, summary);
      return reply.send({ ok: true });
    } catch (error: any) {
      req.log.error({ err: error }, "Summary save failed");
      return reply.code(500).send({ ok: false, error: error?.message ?? "Summary save failed" });
    }
  });

  app.post("/memory/entry", async (req, reply) => {
    const parsed = MemoryEntrySchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
    }
    const { userId, persona, title, body, tags } = parsed.data;
    try {
      await addMemoryEntry(userId, persona, { title, body, tags });
      return reply.send({ ok: true });
    } catch (error: any) {
      req.log.error({ err: error }, "Memory entry save failed");
      return reply.code(500).send({ ok: false, error: error?.message ?? "Memory entry save failed" });
    }
  });

  app.post("/memory/load", async (req, reply) => {
    try {
      const parsed = LoadSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
      }
      const { userId, persona } = parsed.data;
      const record = await loadUserMemory(userId, persona);
      return reply.send({ ok: true, memory: record?.data ?? null, updatedAt: record?.updated_at ?? null });
    } catch (error: any) {
      req.log.error({ err: error }, "Memory load failed");
      return reply.code(500).send({ ok: false, error: error?.message ?? "Memory load failed" });
    }
  });

  app.post("/memory/save", async (req, reply) => {
    try {
      const parsed = SaveSchema.safeParse(req.body);
      if (!parsed.success) {
        return reply.code(400).send({ ok: false, error: "Invalid input", details: parsed.error.flatten() });
      }
      const { userId, persona, data } = parsed.data;
      await saveUserMemory(userId, persona, data);
      return reply.send({ ok: true });
    } catch (error: any) {
      req.log.error({ err: error }, "Memory save failed");
      return reply.code(500).send({ ok: false, error: error?.message ?? "Memory save failed" });
    }
  });
}
