#! /usr/bin/env node

const { getUniqueAuthorsArray, getAllQuotesArray } = require("./utils/getData");
const { Client } = require("pg");
require("dotenv").config();

const create_author_table = async () => {
  const data = await getUniqueAuthorsArray();

  const createTableSQL = `
  CREATE TABLE IF NOT EXISTS authors(
    author_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255)
  );`;

  let insertSQL = "";
  let params = [];

  if (data.length > 0) {
    const placeholders = data.map((_, index) => `($${index + 1})`).join(", ");
    insertSQL = `INSERT INTO AUTHORS (name) VALUES ${placeholders};`;
    params = data;
  }

  return { createTableSQL, insertSQL, params };
};

async function main() {
  console.log("seeding...");
  const { createTableSQL, insertSQL, params } = await create_author_table();

  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  });

  try {
    await client.connect();

    console.log("Executing table creation query...");
    await client.query(createTableSQL);

    // Execute data insertion query if applicable
    if (insertSQL) {
      console.log("Executing data insertion query...");
      await client.query(insertSQL, params);
    } else {
      console.log("No authors to insert");
    }
    console.log("Done seeding!");
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    await client.end();
    console.log("done");
  }
}

main();
