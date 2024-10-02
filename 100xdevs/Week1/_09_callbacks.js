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

const sumOfPowers = (a, b, callback) => {
  return callback(a) + callback(b);
}

const someOfSquares = sumOfPowers(2, 3, (a) => a * a);
// The above line is equivalent to:
/*
  const square = (a) => {
    return a * a;
  }
  // The above function is equivalent to:
  // const square = (a) => a * a
  
  const someOfSquares = sumOfPowers(2, 3, square);
*/ 
console.log("Some of squares (2,3): " + someOfSquares);

const someOfCubes = sumOfPowers(2, 3, (a) => a * a * a);
console.log("Some of cubes (2,3): " + someOfCubes);

const someOfQuads = sumOfPowers(2, 3, (a) => a * a * a * a);
console.log("Some of squares (2,3): " + someOfQuads);


const interval = setInterval( /* Anonymous Function */ () => {
  console.log(new Date().toLocaleTimeString());
}, 1 * 1000);

setTimeout(() => {
  return clearInterval(interval);
}, 5 * 1000);