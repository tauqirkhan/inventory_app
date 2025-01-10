const db = require("../db/queries");

const addQuotePost = async (req, res) => {
  const { author_id } = req.params;
  const { quote } = req.body;

  await db.insertQuote(author_id, quote);
  res.redirect(`/${author_id}/quotes`);
};

module.exports = addQuotePost;
