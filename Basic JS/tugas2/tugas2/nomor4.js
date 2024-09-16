
async function getName() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const users = await response.json();
    return users.map((user) => user.name);
  } catch (e) {
    console.error(e);
  }
}

async function showName() {
  try {
    const names = await getName();
    console.log(names);
  } catch (error) {
    console.error(error);
  }
}

showName();
