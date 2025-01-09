const { Client } = require("pg");
const { getAllQuotesArray } = require("./getData");
require("dotenv").config();

const create_quotes_table = async () => {
  const _quotesArray = await getAllQuotesArray();

  const createQuotesTableSQL = `
  CREATE TABLE IF NOT EXISTS quotes(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    quote TEXT NOT NULL,
    author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE 
  );`;

  let insertQuotesSQL = "";
  let quotesParams = [];

  if (_quotesArray.length > 0) {
    const _placeholders = _quotesArray
      .map(
        (_, index) =>
          `($${index * 2 + 1}, 
            (SELECT authors.id 
            FROM authors 
            WHERE name = $${index * 2 + 2}))`
      )
      .join(", ");
    insertQuotesSQL = `INSERT INTO 
                      QUOTES (quote, author_id) 
                      VALUES ${_placeholders}`;
    quotesParams = _quotesArray.flatMap((obj) => [obj.quote, obj.author]);
  }

  return { createQuotesTableSQL, insertQuotesSQL, quotesParams };
};

async function main() {
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

main();

module.exports = create_quotes_table;
