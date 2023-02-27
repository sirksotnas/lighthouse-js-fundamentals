const instructorWithLongestName = function (instructors) {
  let longestName = instructors[0];
  for (let number of instructors) {
    if (number.name.length > longestName.name.length) {
      longestName = number;
    }
  }
  return longestName;
};
console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);