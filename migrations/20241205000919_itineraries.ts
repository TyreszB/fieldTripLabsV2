import { table } from "console";
import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("itineraries", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("startDate", 100).notNullable();
    table.string("endDate", 100).notNullable();
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {}
