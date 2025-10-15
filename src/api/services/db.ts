import Database from "better-sqlite3";
import bcrypt from "bcryptjs";

export const db = new Database("euphoria.sqlite");

export function ensureTables() {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      display_name TEXT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `).run();
}

export function createUser(displayName: string, email: string, password: string) {
  const hash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare(
    "INSERT INTO users (display_name, email, password) VALUES (?, ?, ?)"
  );
  const info = stmt.run(displayName, email, hash);
  return { id: info.lastInsertRowid, email };
}
