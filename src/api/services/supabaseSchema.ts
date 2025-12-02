import { Client } from "pg";
import { optionalEnv } from "../../mcp/utils/env.js";

const SCHEMA_SQL = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS user_profile (
  user_id INT PRIMARY KEY,
  profile JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_memory_summary (
  user_id INT NOT NULL,
  persona VARCHAR(32),
  summary TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, persona)
);

CREATE TABLE IF NOT EXISTS user_memories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id INT NOT NULL,
  persona VARCHAR(32),
  title TEXT,
  body TEXT,
  tags JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auth tables (Supabase-backed, replacing local MySQL)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  expire_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS sessions_email_idx ON sessions(email);
CREATE INDEX IF NOT EXISTS sessions_expire_at_idx ON sessions(expire_at);
`;

function deriveDbUrl(): string | null {
  const direct =
    optionalEnv("SUPABASE_DB_URL") ||
    optionalEnv("SUPABASE_POSTGRES_URL") ||
    optionalEnv("SUPABASE_DIRECT_URL");
  if (direct) return direct;

  const base = optionalEnv("SUPABASE_URL");
  const password = optionalEnv("SUPABASE_DB_PASSWORD");
  if (!base || !password) return null;

  try {
    const url = new URL(base);
    const ref = url.hostname.split(".")[0];
    if (!ref) return null;
    const host = `db.${ref}.supabase.co`;
    const encodedPw = encodeURIComponent(password);
    return `postgresql://postgres:${encodedPw}@${host}:5432/postgres`;
  } catch {
    return null;
  }
}

let ensured = false;
let attempted = false;

export async function ensureSupabaseSchema(): Promise<void> {
  if (ensured || attempted) return;
  attempted = true;

  const connectionString = deriveDbUrl();
  if (!connectionString) {
    console.warn(
      "[Supabase] Skipping auto-migration: set SUPABASE_DB_URL or SUPABASE_URL + SUPABASE_DB_PASSWORD to enable"
    );
    return;
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    await client.query(SCHEMA_SQL);
    ensured = true;
    console.log("[Supabase] Ensured tables user_profile, user_memory_summary, user_memories");
  } catch (error: any) {
    console.error("[Supabase] Failed to ensure schema:", error?.message ?? error);
  } finally {
    await client.end().catch(() => {});
  }
}
