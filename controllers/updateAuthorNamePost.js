const db = require("../db/queries");

const updateAuthorNamePost = async (req, res) => {
  const { author_id } = req.params;
  const { newAuthorName } = req.body;

  await db.updateAuthorNamePost(newAuthorName, author_id);

  res.redirect(`/${author_id}/quotes`);
};

module.exports = updateAuthorNamePost;
