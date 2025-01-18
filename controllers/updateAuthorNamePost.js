const db = require("../db/queries");
const getAuthorQuotes = require("./getAuthorQuotes");
require("dotenv").config();

const updateAuthorNamePost = async (req, res) => {
  const { author_id } = req.params;
  const { newAuthorName, adminPassword } = req.body;

  if (process.env.ADMINPASSWORD === String(adminPassword)) {
    await db.updateAuthorNamePost(newAuthorName, author_id);

    res.redirect(`/${author_id}/quotes`);
    return;
  }

  res.locals.errors = [{ msg: "Incorrect admin password" }];
  await getAuthorQuotes(req, res);
};

module.exports = updateAuthorNamePost;
