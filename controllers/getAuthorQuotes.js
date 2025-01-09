const db = require("../db/queries");

const getAuthorQuotes = async (req, res) => {
  const { author_id } = req.params;

  const authorsArray = await db.getAllAuthorsNameArray();
  const quotesArray = await db.getAllQuotesArrayByAuthorId(author_id);
  const authorName = await db.getAuthorNameById(author_id);

  res.render("app", {
    authorsArray: authorsArray,
    quotesArray: quotesArray,
    authorName: authorName,
  });
};

module.exports = getAuthorQuotes;
