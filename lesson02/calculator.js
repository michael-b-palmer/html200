const warning = "I think we have too many cats...";
let manycats = 8;
let extracats = 5;
const crazycatperson = manycats + extracats;
const sesamestreetcountlaugh = "ah ah ah!";
const person1 = "Heidi: ";
const person2 = "Mike: ";


console.log(person1 + warning);
console.log(person2 + "Hmm.. I don't know... let me count them.");

for (let currentcats = 15; currentcats >= crazycatperson; currentcats--) {
	console.log(person2 + currentcats + " cats - " + sesamestreetcountlaugh);
	console.log(person1 + "We need fewer cats!");
}
console.log(person2 + "No, no! That's just the right number!");

let remainingcats = 13;

if (remainingcats === crazycatperson) {
	console.log(person1 + "According to Buzzfeed, owning " + crazycatperson + " or more cats makes you a crazy cat person.");
} else {
	console.log(person1 + "That's enough for now.");
}