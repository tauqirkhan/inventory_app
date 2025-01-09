#! /usr/bin/env node

const { getUniqueAuthorsArray, getAllQuotesArray } = require("./utils/getData");
const { Client } = require("pg");
const create_authors_table = require("./utils/create_authors_table");

require("dotenv").config();

async function main() {
  console.log("seeding...");
  const { createAuthorsTableSQL, insertAuthorsSQL, authorsParams } =
    await create_authors_table();

  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  });

  try {
    await client.connect();

    console.log("Executing authors table creation query...");
    await client.query(createAuthorsTableSQL);

    // Execute data insertion query if applicable
    if (insertAuthorsSQL) {
      console.log("Executing data insertion query...");
      await client.query(insertAuthorsSQL, authorsParams);
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
