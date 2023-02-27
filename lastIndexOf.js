const lastIndexOf = function (arrayX, number) {
  if (arrayX.length === 0){
    return (-1);
  }
  for (let i = arrayX.length - 1; i >= 0; i--){
    if (arrayX[i] == number){
      return (i);
    } else if (i === 0 && arrayX[i] != number){
      return (-1);
    }
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([5,5,5,5,0],5), "=?", 3);
console.log(lastIndexOf([0,0,0,0,0],1), "=?", -1);