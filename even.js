// isEven takes as its paramater a number and returns a Boolean value
let isEven  = function (num) {
  return num % 2 === 0;
}
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);
console.log(tenIsEven);
console.log(elevenIsEven);
// simplify version of example above
isEven = function (num) {
  return  num % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(11));