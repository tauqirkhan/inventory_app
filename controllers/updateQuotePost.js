const db = require("../db/queries");
require("dotenv").config();

const updateQuotePost = async (req, res) => {
  const { quote_id } = req.params;
  const { newQuoteText, adminPassword } = req.body;

  const author_id = await db.getAuthorIdByQuoteId(quote_id);

  if (process.env.ADMINPASSWORD === String(adminPassword)) {
    await db.updateQuotePost(newQuoteText, quote_id);

    res.redirect(`/${author_id}/quotes`);
    return;
  }

  res.redirect(`/${author_id}/quotes?error_type=quoteError`);
};

module.exports = updateQuotePost;
