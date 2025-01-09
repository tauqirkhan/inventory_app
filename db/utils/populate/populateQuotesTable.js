const { Client } = require("pg");
const create_quotes_table = require("../create/create_quotes_table");
require("dotenv").config();

async function populateQuotesTable() {
  console.log("seeding...");
  const { createQuotesTableSQL, insertQuotesSQL, quotesParams } =
    await create_quotes_table();

  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  });

  try {
    await client.connect();

    console.log("Executing quotes table creation query...");
    await client.query(createQuotesTableSQL);

    // Execute data insertion query if applicable
    if (insertQuotesSQL) {
      console.log("Executing data insertion query...");
      await client.query(insertQuotesSQL, quotesParams);
    } else {
      console.log("No quotes to insert");
    }
    console.log("Done seeding!");
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    await client.end();
    console.log("done");
  }
}

module.exports = populateQuotesTable;
