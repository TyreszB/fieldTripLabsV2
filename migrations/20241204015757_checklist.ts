import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("checklist", (table) => {
    table.increments("id").primary();
    table.string("name", 100).notNullable();
    table.boolean("confirm").defaultTo(false);
    table.integer("itinerary_id").unsigned().notNullable();
    table
      .foreign("itinerary_id")
      .references("id")
      .inTable("itineraries")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("checklist");
}
