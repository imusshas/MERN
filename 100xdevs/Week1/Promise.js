const fs = require("fs");

function readFile(callBack) {
  fs.readFile("notes.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    callBack("Without Promise: " + data);
  });
}

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("notes.txt", "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("Promise: " + data);
    });
  });
}

function onDone(data) {
  console.log(data.slice(0, data.indexOf("\n")));
}

function onReject(err) {
  console.error(err);
}

readFile(onDone);

const promise = readFilePromise();

promise.then(onDone).catch(onReject);

let result = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 1000);
});

function callBack() {  
  console.log(result);
}

console.log(result); 
console.log("Because it's synchronous & is on the main thread");
result.then(callBack);