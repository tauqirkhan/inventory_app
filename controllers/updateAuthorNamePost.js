const db = require("../db/queries");
require("dotenv").config();

const updateAuthorNamePost = async (req, res) => {
  const { author_id } = req.params;
  const { newAuthorName, adminPassword } = req.body;

  if (process.env.ADMINPASSWORD === String(adminPassword)) {
    await db.updateAuthorNamePost(newAuthorName, author_id);

    res.redirect(`/${author_id}/quotes`);
    return;
  }

  res.redirect(`/${author_id}/quotes?error_type=authorError`);
};

module.exports = updateAuthorNamePost;
