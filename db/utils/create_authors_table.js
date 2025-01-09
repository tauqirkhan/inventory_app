const { getUniqueAuthorsArray } = require("./getData");

const create_authors_table = async () => {
  const _authorsArray = await getUniqueAuthorsArray();

  const createAuthorsTableSQL = `
  CREATE TABLE IF NOT EXISTS authors(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL
  );`;

  let insertAuthorsSQL = "";
  let authorsParams = [];

  if (_authorsArray.length > 0) {
    const _placeholders = _authorsArray
      .map((_, index) => `($${index + 1})`)
      .join(", ");
    insertAuthorsSQL = `INSERT INTO AUTHORS (name) VALUES ${_placeholders};`;
    authorsParams = _authorsArray;
  }

  return { createAuthorsTableSQL, insertAuthorsSQL, authorsParams };
};

module.exports = create_authors_table;
