const nachosGrande =
  "Certified nacho ingredients: beef, cheese, chips, and ham for some reason.";

let ingredients = nachosGrande.split(" ");

console.log(ingredients);

for (i = 0; i < ingredients.length; i++) {
  ingredients[i] = ingredients[i].replaceAll(/:|,/g, "");
}
for (j = 0; j < 3; j++) {
  ingredients.pop();
}
let title = ingredients[2];
ingredients.splice(0, 3);
ingredients.splice(3, 1);
console.log(title + " - " + ingredients.join(", "));
