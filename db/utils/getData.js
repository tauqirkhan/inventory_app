const fetchData = require("./fetch");

const getUniqueAuthorsArray = async () => {
  const data = await fetchData("https://dummyjson.com/quotes?limit=100&skip=0");
  const uniqueAuthors = new Set(data.quotes.map((data) => data.author));
  return [...uniqueAuthors];
};

module.exports = { getUniqueAuthorsArray };
