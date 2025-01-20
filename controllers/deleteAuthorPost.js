const getNextIdOfDeletedAuthor = require("./utils/getNextIdOfDeletedAuthor");
const db = require("../db/queries");

require("dotenv").config();

const deleteAuthorPost = async (req, res) => {
  const { author_id } = req.params;
  const { adminPassword } = req.body;
  numbered_author_id = Number(author_id);

  if (process.env.ADMINPASSWORD === String(adminPassword)) {
    await db.deleteAuthorName(numbered_author_id);

    const nextIdOfDeletedAuthor = await getNextIdOfDeletedAuthor(
      numbered_author_id
    );
    res.redirect(`/${nextIdOfDeletedAuthor}/quotes`);
  } else {
    res.redirect(`/${numbered_author_id}/quotes?error_type=authorErrorDel`);
  }
};

module.exports = deleteAuthorPost;
