require("dotenv").config({ path: "./.env" });
import type { Knex } from "knex";

// Update with your config settings.

console.log("Connecting to database with URL:", process.env.DATABASE_URL);

const config: Knex.Config = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  migrations: {
    extension: "ts",
  },
};

module.exports = config;
