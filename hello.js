// function fundamental
let sayHello = function () {
  console.log("Hello, world");
}
sayHello();
// improved function
sayHello = function (name) {
  console.log("Hello " + name);
}
sayHello("Kris");
// return & console.log difference in function
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);