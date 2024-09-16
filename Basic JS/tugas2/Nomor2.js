const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function searchName(containsName, totalSearch, callback) {
  let result = [];
  for (const name of names) {
    const isContains = name
      .toLocaleLowerCase()
      .includes(containsName.toLowerCase());
    if (isContains) {
      result.push(name);
    }
  }
  callback(result.slice(0, totalSearch));
}

function showName(result) {
  console.log(result);
}

searchName("An", 3, showName);
