const db = require("../db/queries");
const getAllQuotesArray = require("./getAuthorQuotes");
require("dotenv").config();

const updateQuotePost = async (req, res) => {
  const { quote_id } = req.params;
  const { newQuoteText, adminPassword } = req.body;

  const author_id = await db.getAuthorIdByQuoteId(quote_id);

  if (process.env.ADMINPASSWORD === adminPassword) {
    await db.updateQuotePost(newQuoteText, quote_id);

    res.redirect(`/${author_id}/quotes`);
    return;
  }

  res.locals.errors = [{ msg: "Incorrect admin password to edit quote" }];
  req.params.author_id = author_id;

  await getAllQuotesArray(req, res);
};

module.exports = updateQuotePost;
