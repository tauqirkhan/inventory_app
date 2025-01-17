export default async function fetchAuthorsArr() {
  const url = "/db/authorsArray";

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`Response status, ${response.status}`);

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Fetch error: ", err);
  }
}
