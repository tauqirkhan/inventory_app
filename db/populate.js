const { getUniqueAuthorsArray } = require("./utils/getData");

const create_author_table = async () => {
  const data = await getUniqueAuthorsArray();

  let string = "";

  data.forEach((name) => (string = string + `VALUES (${name}), `));

  const sql = `
  CREATE TABLE IF NOT EXISTS author(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255)
  );

  INSERT INTO author (name)
  ${string}
`;

  return sql;
};

const SQL = create_author_table().then((res) => console.log(res));
