const db = require("../db/queries");

const updateQuotePost = async (req, res) => {
  const { quote_id } = req.params;
  const { newQuoteText } = req.body;

  await db.updateQuotePost(newQuoteText, quote_id);

  const author_id = await db.getAuthorIdByQuoteId(quote_id);

  res.redirect(`/${author_id}/quotes`);
};

module.exports = updateQuotePost;
