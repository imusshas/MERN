/*
  When to use an async function?
    1. Do a network call
    2. Sleep/Wait a thread for some resources
    3. Read/Write a file
    4. Database call
*/

function myOwnAsyncFunction(callback, duration) {
  setTimeout(callback, duration);
}

myOwnAsyncFunction(() => { console.log("My Own Async Function") }, 1000);

// Promisified myOwnAsyncFunction
function myPromiseAsyncFunction(message, duration) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(message), duration);
    setTimeout(reject, duration);
    // console.log(promise); // Promise { <rejected> ReferenceError: Cannot access 'promise' before initialization }

    return;
  });
  return promise;
}

const result = myPromiseAsyncFunction("My Promise Async Function", 1000);
console.log(result);

result
  .then((response) => {
    console.log(response);
    return "My Promise Async Function 2nd";
  })
  .then((response) => {
    console.log(response);
    return "My Promise Async Function 3rd";
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("Error in My Promise Async Function: " + error.message);
  });


function myOwnAwaitFunction(message) {
  return message;
}

async function myAsyncAwaitAsyncFunction() {
  /*
    1. In general, the async function always executes in the Call Stack.
    2. In this case, neither the async function nor the 1st await function [myOwnAwaitFunction] will be executed via Web API's.
    3. An await function get's executed via Web API's only when it uses an underlying JS built-in callbacks. Like [setTimeout] OR [setInterval] OR [Promise Class] etc.
    4. An await function stops the threads execution only if the awaiting function returns a promise.
  */
  const value = await myOwnAwaitFunction("Await: My AsyncAwait Async Function");
  console.log("Inside myAsyncAwaitAsyncFunction: " + value);

  // Thread doesn't wait. Await keyword only stops the thread when the function returns a promise.
  await myOwnAsyncFunction(() => {
    console.log("Async: My AsyncAwait Async Function");
  }, 1000);

  const response = await myPromiseAsyncFunction("Promise: My AsyncAwait Async Function", 500); // Default delay 0 milliseconds
  console.log(response);
  // response.then();  // TypeError: response.then is not a function
}

myAsyncAwaitAsyncFunction();