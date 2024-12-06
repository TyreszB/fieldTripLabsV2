import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("reviews", (table) => {
    table.increments("id").primary();
    table.string("content").notNullable();
    table.integer("rating").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("reviews");
}
