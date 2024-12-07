import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("photos", (table) => {
    table.increments("id").primary();
    table.string("photoUrl").notNullable();
    table.string("caption").notNullable();
    table.integer("review_id").unsigned().notNullable();
    table
      .foreign("review_id")
      .references("id")
      .inTable("reviews")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("photos");
}
