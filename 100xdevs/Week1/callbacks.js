const sumOfTwo = (a, b, functionToCall) => {
  functionToCall(a + b);
}

const displayResult = (data) => {
  console.log("Result of the sum is: " + data);
}

const displayResultPassive = (data) => {
  console.log("Sum's result is: " + data);
}

sumOfTwo(1, 2, displayResult);
sumOfTwo(1, 2, displayResultPassive);

const interval = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1 * 1000);

setTimeout(() => {
  return clearInterval(interval);
}, 5 * 1 * 1000);