const name1 = "Mountain ";
const name2 = "Goat";
const age = 15;
let legalAge = 16;

if (age < legalAge) {
  console.log(`Hey there Mr. ${name1 + name2}, you're only ${age}!`);
  for (let i = 5; i > 0; i--) {
    console.log(i + " seconds");
  }
  console.log("Self-destruct!");
} else {
  console.log(`Move along, Mr. ${name1 + name2}`);
}
