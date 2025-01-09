#! /usr/bin/env node

const populateAuthorsTable = require("./utils/populate/populateAuthorsTable");
const populateQuotesTable = require("./utils/populate/populateQuotesTable");

populate();

async function populate() {
  await populateAuthorsTable();
  await populateQuotesTable();
}
