const fetchData = require("./fetch");

const getUniqueAuthorsArray = async () => {
  const data = await fetchData("https://dummyjson.com/quotes?limit=100&skip=0");
  const uniqueAuthors = new Set(data.quotes.map((data) => data.author));
  return [...uniqueAuthors];
};

const getAllQuotesArray = async () => {
  const data = await fetchData("https://dummyjson.com/quotes?limit=100&skip=0");
  const uniqueQuotes = new Map();

  data.quotes.forEach((obj) => {
    uniqueQuotes.set(obj.quote, { quote: obj.quote, author: obj.author });
  });

  const arrayObject = Array.from(uniqueQuotes.values());

  return arrayObject;
};

module.exports = { getUniqueAuthorsArray, getAllQuotesArray };
