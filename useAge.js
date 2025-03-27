//Collect user age

let age = parseInt(prompt("Enter your age: "), 10);

if (age < 5) {
  console.log("Toddler is (under 5 years old)");
} else if (age <= 12) {
  console.log("Child is (5-12 years old)");
} else if (age <= 19) {
  console.log("Teenager is (13-19 years old)");
} else if (age <= 35) {
  console.log("Young Adult is (20-35 years old)");
} else if (age <= 60) {
  console.log("Middle Aged is (36-60 years old)");
} else {
  console.log("Senior is (over 60 years old)");
}
