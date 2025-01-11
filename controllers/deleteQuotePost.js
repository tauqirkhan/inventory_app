const db = require("../db/queries");

const deleteQuotePost = async (req, res) => {
  const { quote_id } = req.params;

  await db.deleteQuoteById(quote_id);

  res.redirect("/19/quotes");
};

module.exports = deleteQuotePost;
