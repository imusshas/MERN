function getPromises() {
  const p1 = new Promise((resolve) => resolve("Promise 1 resolved"));
  const p2 = new Promise((resolve) => resolve("Promise 2 resolved"));
  return [p1, p2];
}

const promises = getPromises();
Promise.all(promises)
  .then((response) => console.log(response));