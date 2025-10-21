// src/db.ts
if (typeof window !== "undefined") {
  throw new Error("Do not import server-only db module in the browser");
}

import "dotenv/config";
import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.DB_HOST ?? "127.0.0.1",
  port: Number(process.env.DB_PORT ?? "3306"),
  user: process.env.DB_USER ?? "Anurag",
  password: process.env.DB_PASSWORD ?? "apppass",
  database: process.env.DB_NAME ?? "Euphoria",
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONN_LIMIT ?? "10"),
});
