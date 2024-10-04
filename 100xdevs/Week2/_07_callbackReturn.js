function callBackReturn(num, callback) {
  callback(num * num);
}

callBackReturn(4, function (result) {
  console.log("The callback function returns: " + result);
});

function outerFunction(callback) {
  console.log("Outer function starts");
  callback("Hello, callback!");
  console.log("Outer function ends");
}


outerFunction(function callbackFunction(message) {
  console.log("Callback function: " + message);
});