import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE posts (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      is_private boolean NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE posts`;
}
