const asyncHandler = require("express-async-handler");
const db = require("../db/queries");
const checkQueryAndAddError = require("./utils/checkQueryAndAddError");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getAuthorQuotes = asyncHandler(async (req, res) => {
  const { error_type } = req.query;
  const { author_id } = req.params;
  const authorsArray = await db.getAllAuthorsNameArray();
  const quotesArray = await db.getAllQuotesArrayByAuthorId(author_id);
  const authorName = await db.getAuthorNameById(author_id);

  //Only found authorName is string
  if (typeof authorName !== "string") {
    throw new CustomNotFoundError("Author not found");
  }

  //To show error manually for password mismatch through locals
  checkQueryAndAddError(error_type, res);

  res.render("app", {
    authorsArray: authorsArray,
    quotesArray: quotesArray,
    authorName: authorName,
    author_id: author_id,
  });
});

module.exports = getAuthorQuotes;
