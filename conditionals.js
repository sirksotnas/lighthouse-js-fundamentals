// conditional fundamentals
let raining = false;
let cold = false;
if (raining) {
  console.log("Don't forget your umbrella!");
}
if (cold) {
  console.log('Make sure you pick out a scarf!');
}
console.log("Now you're ready to go outside!");
// conditional if else statement
cold = false
if (cold) {
    console.log("Make sure you pick out a scarf!");
  } else {
    console.log("Short sleeves are fine.");
  }
// conditional exercise: weather
const temperature = 16;
if (temperature < 0) {
  console.log('Make sure you pick out a scarf!');
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");
// using logical operator &&
const isCitizen = true;
const age =26;
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
// using logical operator ||
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea..");
}
// using logical operator !
if (!raining) {
  console.log("Leave your umbrella at home!");
}