function callBack(message) {
  console.log("CallBack:");
  console.log(message);

}
function invokeCallBack(callBack, delay) {
  setTimeout(() => callBack("CallBack called after " + delay / 1000 + " seconds"), delay);
}

function onResolve (response) {
  console.log("Promise:");
  console.log(response);
}

function onReject (error) {
  console.log("Promise:");
  console.error(error);
}

function promise (delay) {  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after " + delay/1000 + " seconds");
      reject("Promise rejected");
    }, 1 * delay || 1 * 1000);
  });
}

async function asyncAwait(delay) {
  let response = await promise(delay);
  console.log("Async Await:");
  console.log(response);
}

invokeCallBack(callBack, 3 * 1000);
promise(2000).then(onResolve).catch(onReject);
asyncAwait(1000);



console.log("After all calls on main thread");

