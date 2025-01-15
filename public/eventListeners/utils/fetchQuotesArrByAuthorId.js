export default async function fetchQuotesArrByAuthorId(author_id) {
  const url = `/db/quotesArray?author_id=${author_id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`Response status, ${response.status}`);

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Fetch error: ", err);
  }
}
