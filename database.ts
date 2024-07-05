import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

export type Animal1 = {
  isAdmin: boolean;
};

// This is an expected error
export async function getAnimal1() {
  return await sql<Animal1[]>`
    SELECT
      animals.is_admin
    FROM
      animals
  `;
}

export type Animal = {
  isAdmin: boolean | null;
};
// This is not an expected error
export async function getAnimal() {
  return await sql<Animal[]>`
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
