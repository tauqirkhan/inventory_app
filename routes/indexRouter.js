const { Router } = require("express");
const getIndex = require("../controllers/getIndex");

const indexRouter = Router();

indexRouter.get("/", getIndex);

module.exports = indexRouter;
