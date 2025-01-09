const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const asyncHandler = require("express-async-handler");

const getIndex = asyncHandler(async (req, res) => {
  const authorsArray = await db.getAllAuthorsNameArray();
  const firstAuthorQuotesArray = await db.getAllQuotesArrayByAuthorId(1);

  if (!firstAuthorQuotesArray)
    throw new CustomNotFoundError("Not correct! Quotes not found");
  if (!authorsArray) throw new CustomNotFoundError("Cannot found authors");

  res.render("app", {
    authorsArray: authorsArray,
    quotesArray: firstAuthorQuotesArray,
  });
});

module.exports = getIndex;
