function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 1 * 1000);
  });
}

async function main(params) {
  let response = await asyncFunction();
  console.log(response);
}
main();

console.log("After main call");
