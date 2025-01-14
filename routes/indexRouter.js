const { Router } = require("express");
const getIndex = require("../controllers/getIndex");
const getAuthorQuotes = require("../controllers/getAuthorQuotes");
const addAuthorPost = require("../controllers/addAuthorPost");
const addQuotePost = require("../controllers/addQuotePost");
const deleteAuthorPost = require("../controllers/deleteAuthorPost");
const deleteQuotePost = require("../controllers/deleteQuotePost");
const updateAuthorNamePost = require("../controllers/updateAuthorNamePost");
const getAllAuthorsNameArray = require("../controllers/getAllAuthorsNameArray");

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/:author_id/quotes", getAuthorQuotes);
indexRouter.get("/db/queries", getAllAuthorsNameArray);

indexRouter.post("/addAuthor", addAuthorPost);
indexRouter.post("/:author_id/addQuote", addQuotePost);
indexRouter.post("/:author_id/deleteAuthor", deleteAuthorPost);
indexRouter.post("/:quote_id/deleteQuote", deleteQuotePost);
indexRouter.post("/:author_id/update", updateAuthorNamePost);

module.exports = indexRouter;
