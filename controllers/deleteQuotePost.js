const db = require("../db/queries");

const deleteQuotePost = async (req, res) => {
  const { quote_id } = req.params;

  const getAuthorIdByQuoteId = await db.getAuthorIdByQuoteId(quote_id);
  console.log(getAuthorIdByQuoteId);
  await db.deleteQuoteById(quote_id);

  res.redirect(`/${getAuthorIdByQuoteId}/quotes`);
};

module.exports = deleteQuotePost;
