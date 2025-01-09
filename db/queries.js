const pool = require("./pool");

async function getAllAuthorsNameArray() {
  const { rows } = await pool.query("SELECT * FROM authors;");
  return rows;
}

async function getAllQuotesArrayByAuthorId(author_id) {
  const { rows } = await pool.query(
    "SELECT * FROM quotes WHERE author_id = $1;",
    [author_id]
  );
  return rows;
}

module.exports = { getAllAuthorsNameArray, getAllQuotesArrayByAuthorId };
