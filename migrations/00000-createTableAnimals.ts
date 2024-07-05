import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE animals (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      is_admin boolean
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE animals`;
}
