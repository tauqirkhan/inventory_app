const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const asyncHandler = require("express-async-handler");

const getAuthorQuotes = asyncHandler(async (req, res) => {
  const { author_id } = req.params;

  const authorsArray = await db.getAllAuthorsNameArray();
  const quotesArray = await db.getAllQuotesArrayByAuthorId(author_id);

  if (!quotesArray)
    throw new CustomNotFoundError("Not correct! Quotes not found");
  if (!authorsArray) throw new CustomNotFoundError("Cannot found authors");

  res.render("app", {
    authorsArray: authorsArray,
    quotesArray: quotesArray,
  });
});

module.exports = getAuthorQuotes;
