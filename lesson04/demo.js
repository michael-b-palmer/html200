var ssn = [];

const arrStrings = [
  "Enter the first three digits of your Social Security Number:",
  "Enter the middle two digits of your Social Security Number:",
  "Enter the last four digits of your Social Security Number:"
];
function square(number) {
  return number * number;
}

function stealIdentity() {
  let i = 0;
  while (i < 3) {
    let input = prompt(arrStrings[i]);

    if (input == null) {
      alert("You're not a quitter, are you? Come on! Don't give up!");
      continue;
    } else {
      if (input.length <= 0 || isNaN(input)) {
        alert("I said put in a NUMBER ya dingus!");
        continue;
      } else {
        ssn.push(input);
        i++;
      }
    }
  }

  alert(
    "Your Score is: " +
      square(ssn[0]) +
      " You're a genius!\n\n " +
      ssn[1] * ssn[2] +
      " Points for Gryffindor!"
  );
  console.log("I can't believe that actually worked! " + ssn.join("-"));
}
