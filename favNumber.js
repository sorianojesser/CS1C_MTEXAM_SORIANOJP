//Favorite Number

let favNumber = 11;
let guess;

while ((guess = parseInt(prompt("Guess my favorite number: "))) !== favNumber) {
  console,log(guess > favNumber ? "Too high" : "Too low");
}
console.log("Correct!");
