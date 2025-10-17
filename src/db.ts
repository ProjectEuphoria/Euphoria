// src/db.ts
if (typeof window !== "undefined") {
  throw new Error("Do not import server-only db module in the browser");
}

import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "Anurag",
  password: "apppass",
  database: "Euphoria",
  waitForConnections: true,
  connectionLimit: 10,
});
