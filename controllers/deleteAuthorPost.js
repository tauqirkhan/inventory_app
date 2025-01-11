const db = require("../db/queries");

const deleteAuthorPost = async (req, res) => {
  const { author_id } = req.params;

  await db.deleteAuthorName(author_id);

  res.redirect("/");
};

module.exports = deleteAuthorPost;
