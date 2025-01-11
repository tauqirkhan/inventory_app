const { Router } = require("express");
const getIndex = require("../controllers/getIndex");
const getAuthorQuotes = require("../controllers/getAuthorQuotes");
const addAuthorPost = require("../controllers/addAuthorPost");
const addQuotePost = require("../controllers/addQuotePost");
const deleteAuthorPost = require("../controllers/deleteAuthorPost");

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/:author_id/quotes", getAuthorQuotes);

indexRouter.post("/addAuthor", addAuthorPost);
indexRouter.post("/:author_id/addQuote", addQuotePost);
indexRouter.post("/:author_id/delete", deleteAuthorPost);

module.exports = indexRouter;
