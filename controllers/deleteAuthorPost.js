const getFirstNonDeletedId = require("./utils/getFirstNonDeletedId");
const getNextIdOfDeletedAuthor = require("./utils/getNextIdOfDeletedAuthor");

const db = require("../db/queries");

const deleteAuthorPost = async (req, res) => {
  const { author_id } = req.params;

  numbered_author_id = Number(author_id);
  await db.deleteAuthorName(numbered_author_id);

  const nextIdOfDeletedAuthor = await getNextIdOfDeletedAuthor(
    numbered_author_id
  );

  res.redirect(`/${nextIdOfDeletedAuthor}/quotes`);
};

module.exports = deleteAuthorPost;
