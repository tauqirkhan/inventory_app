const { Router } = require("express");
const getIndex = require("../controllers/getIndex");
const getAuthorQuotes = require("../controllers/getAuthorQuotes");

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/:author_id/quotes", getAuthorQuotes);

module.exports = indexRouter;
