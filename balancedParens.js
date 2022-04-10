// Sample Strings
let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

// Write your solution below:
const balanced = (string) => {
  let pendingBracket = 0;
  const stgArr = string.split("");
  stgArr.forEach((element) => {
    if (element === "(") {
      pendingBracket++;
    }
    if (element === ")") {
      pendingBracket--;
    }
  });
  if (pendingBracket === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(balanced(sample4));
