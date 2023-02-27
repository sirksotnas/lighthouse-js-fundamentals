const urlEncode = function (text) {
  let string = text.trim();
  let encoded = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      encoded += "%20";
    } else {
      encoded += string[i];
    }
  }
  return encoded;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
