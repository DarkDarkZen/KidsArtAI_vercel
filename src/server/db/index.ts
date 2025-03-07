import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

// Create a mock database connection if DATABASE_URL is not set
const conn = globalForDb.conn ?? (env.DATABASE_URL ? postgres(env.DATABASE_URL) : null);
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

// Create a mock database if no connection is available
export const db = conn ? drizzle(conn, { schema }) : {
  query: {
    users: {
      findFirst: async () => null,
      findMany: async () => [],
    },
    products: {
      findFirst: async () => null,
      findMany: async () => [],
    },
    cartItems: {
      findFirst: async () => null,
      findMany: async () => [],
    },
    promocodes: {
      findFirst: async () => null,
      findMany: async () => [],
    },
  },
  insert: () => ({ values: () => ({ returning: () => Promise.resolve([]) }) }),
  update: () => ({ set: () => ({ where: () => Promise.resolve([]) }) }),
export const db = drizzle(conn, { schema });
