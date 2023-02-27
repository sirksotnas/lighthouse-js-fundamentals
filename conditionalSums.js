const conditionalSum = function(value, condition) {
  let sums = 0;

  for (let number of value) {
    if ((number % 2 === 0 && condition === 'even') || (number % 2 !== 0 && condition === 'odd')) {
      sums += number;
    }
  }

  return sums;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));