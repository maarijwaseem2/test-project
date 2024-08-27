import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable('books', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.integer('year').notNullable();
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists('books');
};
