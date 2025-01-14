const db = require("../db/queries");

const addAuthorPost = async (req, res) => {
  const { authorName } = req.body;
  await db.insertAuthor(authorName);

  const authorId = await db.getAuthorIdArrayByName(authorName);
  const currentAuthorId = authorId[authorId.length - 1].id;
  console.log("Author_id: ", currentAuthorId);
  res.redirect(`/${currentAuthorId}/quotes`);
};

module.exports = addAuthorPost;
