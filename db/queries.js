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

async function getAuthorNameById(id) {
  const { rows } = await pool.query("SELECT name FROM authors WHERE id = $1", [
    id,
  ]);
  return rows[0].name;
}

async function insertAuthor(authorName) {
  await pool.query("INSERT INTO authors(name) VALUES ($1)", [authorName]);
}

async function insertQuote(author_id, quote) {
  await pool.query("INSERT INTO quotes(author_id, quote) VALUES ($1, $2)", [
    author_id,
    quote,
  ]);
}

insertQuote(40, "One step at a time");

module.exports = {
  getAllAuthorsNameArray,
  getAllQuotesArrayByAuthorId,
  getAuthorNameById,
  insertAuthor,
  insertQuote,
};
