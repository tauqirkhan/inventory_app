const { Router } = require("express");
const getIndex = require("../controllers/getIndex");
const getAuthorQuotes = require("../controllers/getAuthorQuotes");
const addAuthorPost = require("../controllers/addAuthorPost");

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/:author_id/quotes", getAuthorQuotes);

indexRouter.post("/addAuthor", addAuthorPost);
// indexRouter.post("/:id/addQuote", addQuotePost);

module.exports = indexRouter;
