const db = require("../db/queries");

const addAuthorPost = async (req, res) => {
  const { authorName } = req.body;
  await db.addAuthor(authorName);
  res.redirect("/");
};

module.exports = addAuthorPost;
