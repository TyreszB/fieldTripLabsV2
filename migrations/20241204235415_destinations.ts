import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("destinations", (table) => {
    table.increments("id").primary();
    table.string("name", 100).notNullable();
    table.string("address", 100);
    table.string("description");
    table.string("place_id").unique();
    table.string("photo_url", 10000);
    table.integer("itinerary_id").unsigned().notNullable();
    table
      .foreign("itinerary_id")
      .references("id")
      .inTable("itineraries")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("destinations");
}
