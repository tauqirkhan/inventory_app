const fetchData = async (url) => {
  if (url) {
    console.log("loading...");
    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error(`Response status, ${response.status}`);

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error: ", error);
    } finally {
      console.log("Fetch operation completed");
    }
  }
};

module.exports = fetchData;
