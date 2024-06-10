import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

export async function getNow() {
  return await sql`
    SELECT
      now()
  `;
}
