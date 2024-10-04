function execution() {
  setTimeout(() => {console.log("Hello from [setTimeout] -> execution");
  }, 2000);
  console.log("Hello from [execution]");
}

execution();

function asyncExecution() {
  setTimeout(() => {
    console.log("Hello from [setTimeout] -> asyncExecution");
  }, 1500);
  console.log("Hello from [asyncExecution]");
}

asyncExecution();

async function asyncPromiseExecution() {
  const response =  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from [setTimeout] -> asyncPromiseExecution");
    }, 1000);
  });

  console.log(response);
  console.log("Hello from [asyncPromiseExecution]");
  
}

asyncPromiseExecution();

console.log("Hello from outside");
