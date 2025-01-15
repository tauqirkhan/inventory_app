const pool = require("./pool");

//Should be names getAllAuthorsArray!
async function getAllAuthorsNameArray() {
  const { rows } = await pool.query("SELECT * FROM authors;");
  return rows;
}

async function getAllQuotesArray() {
  const { rows } = await pool.query("SELECT * FROM quotes;");
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
  if (rows.length == 0) return rows;
  return rows[0].name;
}

async function getAuthorIdByQuoteId(quote_id) {
  const { rows } = await pool.query(
    "SELECT author_id FROM quotes WHERE quotes.id = $1;",
    [quote_id]
  );
  return rows[0].author_id;
}

async function getAuthorIdArrayByName(name) {
  const { rows } = await pool.query("SELECT id FROM authors WHERE name = $1", [
    name,
  ]);
  return rows;
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

async function deleteAuthorName(author_id) {
  await pool.query("DELETE FROM authors WHERE id = $1", [author_id]);
}

async function deleteQuoteById(id) {
  await pool.query("DELETE FROM quotes WHERE id = $1", [id]);
}

async function updateAuthorNamePost(authorName, author_id) {
  await pool.query("UPDATE authors  SET name = $1 WHERE id = $2", [
    authorName,
    author_id,
  ]);
}

async function updateQuotePost(newQuoteText, quote_id) {
  await pool.query("UPDATE quotes SET quote = $1 WHERE id = $2", [
    newQuoteText,
    quote_id,
  ]);
}

module.exports = {
  getAuthorIdArrayByName,
  getAllQuotesArray,
  getAuthorIdByQuoteId,
  getAllAuthorsNameArray,
  getAllQuotesArrayByAuthorId,
  getAuthorNameById,
  insertAuthor,
  insertQuote,
  deleteAuthorName,
  deleteQuoteById,
  updateAuthorNamePost,
  updateQuotePost,
};
