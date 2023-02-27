function judgeVegetable(vegetables, metric) {
  let highestStat = 0;
  let winningVeggie = "";
  vegetables.forEach(function (vegetable) {
    if (vegetable[metric] >= highestStat) {
      winningVeggie = vegetable.submitter;
      highestStat = vegetable[metric];
    }
  });
  return winningVeggie;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness'
console.log(judgeVegetable(vegetables, metric));