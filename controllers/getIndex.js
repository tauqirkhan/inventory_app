const db = require("../db/queries");

const getIndex = async (req, res) => {
  const authorsArray = await db.getAllAuthorsNameArray();
  const firstAuthorQuotesArray = await db.getAllQuotesArrayByAuthorId(1);
  res.render("index", {
    authorsArray: authorsArray,
    firstAuthorQuotesArray: firstAuthorQuotesArray,
  });
};

module.exports = getIndex;
