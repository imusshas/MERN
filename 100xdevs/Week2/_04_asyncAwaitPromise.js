function promiseFunction (data) {
  let promise = new Promise((resolve) => {
    resolve(data);
  });

  return promise;
}

async function asyncPromise() {
  // Will the [promiseFunction] be executed via Web API's?
  const response = await promiseFunction("Promise resolved");
  console.log(response);
  
}

asyncPromise();

console.log("Program finished");
