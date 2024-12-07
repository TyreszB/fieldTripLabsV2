import { table } from "console";
import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("checklistItems", (table) => {
    table.increments("id").primary();
    table.string("itemName", 100).notNullable();
    table.integer("checklist_id").unsigned().notNullable();
    table
      .foreign("checklist_id")
      .references("id")
      .inTable("checklists")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("checklistItems");
}
