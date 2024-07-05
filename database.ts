import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

export type Animal1 = {
  isAdmin: boolean;
};

export type Animal2 = {
  isAdmin: boolean | null;
};

export async function getAnimal1() {
  return await sql<Animal1[]>`
    SELECT
      animals.is_admin
    FROM
      animals
  `;
}
export async function getAnimal2() {
  return await sql<Animal2[]>`
    SELECT
      animals.is_admin
    FROM
      animals
  `;
}

// This will not throw an error

export type Post = {
  isPrivate: boolean;
};
export async function getPost() {
  return await sql<Post[]>`
    SELECT
      posts.is_private
    FROM
      posts
  `;
}
