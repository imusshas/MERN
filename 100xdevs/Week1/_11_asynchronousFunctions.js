function calculateSum(num) {
  sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function printSum(num) {
  console.log("Sum = " + calculateSum(num));
}

setTimeout(printSum, 2 * 1000, 100);
// function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
console.log("After setTimeout call");

const fs = require("fs");
fs.readFile("notes.txt", "utf8", (err, _) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Finished reading file at: " + new Date().toLocaleTimeString());
});

for (let i = 0; i < 1_000_000_000; i++) {
  
}

console.log("Program finished at: " + new Date().toLocaleTimeString());
