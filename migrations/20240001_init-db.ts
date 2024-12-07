import { table } from "console";
import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable().unique();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table
      .string("email")
      .unique()
      .notNullable()
      .checkRegex("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"); // regex for email validation
    table.string("image");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}
