const getFirstNonDeletedId = require("./utils/getFirstNonDeletedId");

const db = require("../db/queries");

const deleteAuthorPost = async (req, res) => {
  const { author_id } = req.params;

  await db.deleteAuthorName(author_id);

  const redirectedId = await getFirstNonDeletedId();

  res.redirect(`/${redirectedId}/quotes`);
};

module.exports = deleteAuthorPost;
