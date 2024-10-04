function awaitAsync(callback, delay) {
  setTimeout(callback, delay);
}

function awaitPromise(data, delay) {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  })

  return promise;
}

async function myOwnAwaitPromiseAsyncFunction() {
  // Thread waits
  const response = await awaitPromise("Promise resolved", 1000);
  console.log(response);
  await awaitAsync(() => {console.log("After Promise:  Async call");
  }, 500);
}

myOwnAwaitPromiseAsyncFunction();

async function myOwnAwaitAsyncPromiseFunction() {
  // Thread doesn't wait. Await function only stops the thread when the function returns a promise.
  await awaitAsync(() => {
    console.log("Before Promise:  Async call");
  }, 1000);
  const response = await awaitPromise("Promise resolved", 200);
  console.log(response); 
}

myOwnAwaitAsyncPromiseFunction();