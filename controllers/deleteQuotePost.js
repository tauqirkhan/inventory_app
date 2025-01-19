const db = require("../db/queries");

require("dotenv").config();

const deleteQuotePost = async (req, res) => {
  const { quote_id } = req.params;
  const { adminPassword } = req.body;

  const author_id = await db.getAuthorIdByQuoteId(quote_id);

  if (process.env.ADMINPASSWORD === String(adminPassword)) {
    await db.deleteQuoteById(quote_id);

    //Ends middleware request response cycle
    res.redirect(`/${author_id}/quotes`);
    //Exit js function
    return;
  }

  res.redirect(`/${author_id}/quotes?error_type=quoteErrorDel`);
};

module.exports = deleteQuotePost;
