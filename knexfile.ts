import dotenv from "dotenv";
import { knex as setupKnex } from "knex";

dotenv.config({ path: "./.env" });

console.log("Connecting to database with URL:", process.env.DB_HOST);

const config = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
      acquireTimeoutMillis: 60000,
      idleTimeoutMillis: 30000,
    },
    migrations: {
      extension: "ts",
      tableName: "FieldTripLabs",
      directory: "./migrations",
    },
  },
};

export default config;

// Might need to redo all of this
