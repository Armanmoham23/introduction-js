// ✋ FORK BEFORE STARTING ✋

// Task 1: Convert Strings to Numbers  🚀🚀🚀🚀
/*
The year is 3024, and you've discovered a dusty old time machine. It has a broken display showing "1999" as a string, but the machine only accepts numbers to work. 
*/

// Do the following:
// 1. Declare a string variable with the value "1999".
// 2. Convert the string value of "1999" into a number.
// 3. Display the number to the console to "fix" the time machine.

//Task 1: solution 1 Using NUMBER FUNCTION
const year = Number("1999");
console.log(year);

//Task 1: solution 2 using PARSEINT FUNCTION
const year1 = parseInt("1999");
console.log(year1);

//Task 1: solution 3 using + OPERATOR
const year2 = +"1999";
console.log(year2);





// Task 2: Odd or Even 🚀🚀🚀🚀
/*
You’re a detective investigating a mysterious code. Your clue is a number that could be odd or even.
*/
// 1. Declare a variable with the number 27 (or another number of your choice).
// 2. Write an if/else statement to check if the number is odd or even.
// 3. If it’s odd, console.log("This number is odd. The thief is tricky!").
// 4. If it’s even, console.log("This number is even. The thief is neat!").

//Task 1: solution 1 using IF/ELSE
const choice = 20;
if(choice % 2 === 1){
  console.log("This number is odd. The thief is tricky!")
}
else if (choice % 2 === 0){
  console.log("This number is even. The thief is neat!")
}

//Task 1: solution 2 Using TENERY OPERATORS
const chocie1 = 20;
console.log(chocie1 % 2 === 0 ? "This number is even. The thief is neat" : "This number is odd. The thief is tricky!");







// Task 3: Mood Checker 🚀🚀🚀🚀

// You are designing a basic mood tracker app. Write a script that:

// 1. Prompts the user to share how they feel today (e.g., happy, sad, tired).
// 2. If the user enters "happy", console.log("I'm glad to hear that!").
// 3. If the user enters "sad", console.log("I'm sorry, hope you feel better soon.").
// 4. If the user enters "tired", console.log("Make sure to get some rest.").
// 5. For any other input, console.log("Thank you for sharing how you feel.").

// Task 3: Solution
let userInput = prompt(" share your feeling with us (e.g., happy, sad, tired):");
if(userInput=== "happy"){
  console.log("I'm glad to hear that!");
}
else if(userInput === "sad"){
  console.log("I'm sorry, hope you feel better soon.");
}
else if(userInput === "tired"){
  console.log("Make sure to get some rest.");
}else{
  console.log("Thank you for sharing how you feel.");
}

// Task 3: Solution 2 using OBJECTS WITH KEY, VALUE PAIRS.
let mood = prompt("share your feeling with us (e.g., happy, sad, tired):");
const moods = {
  happy: "I'm glad to hear that!",
  sad: "I'm sorry, hope you feel better soon.",
  tired: "Make sure to get some rest."
}
console.log(moods[mood] || "Thank you for sharing how you feel.");




/*
Task 4: Temperature Checker 🚀🚀🚀🚀

You are the operator of a remote weather station in Antarctica.

1. Prompt the user to enter a temperature in Celsius.
2. Convert the temperature to Fahrenheit using the formula F = (C × 9/5) + 32.
3. If the temperature is below 0°C, console.log("Ice Alert! It's freezing!").
4. If it’s above 30°C, console.log("Fire Alert! It's boiling!").
5. Otherwise, console.log("The temperature is normal.").
*/

// Task 4: Solution 1 using IF/ELSE
let tem = prompt("please enter your Tempreture in Celcius: ");
temInFah = (tem * 9/5) + 32
 console.log("your tempreture in Fahrenheit is: " + temInFah);
if(tem < 0){
  console.log("Ice Alert! It's freezing!");
}
else if(tem > 30){
  console.log("Fire Alert! It's boiling!");
}else{
  console.log("The temperature is normal.");
}

// Task 4: Solution 2 using SWITCH  

let tem1 = prompt("please enter your Tempreture in Celcius: ");
tem1 = +tem1;
let temInFah1 = (tem1 * 9/5) + 32;
console.log("your tempreture in Fahrenheit is: " + temInFah1);

switch(true){
  case(tem < 0):
    console.log("Ice Alert! It's freezing!");
  break;
  case(tem > 30):
    console.log("Fire Alert! It's boiling!");
  break;
  default:
    console.log("The temperature is normal.");
}






// *** STRETCH GOAL *** //

// Stretch 1: FIZZBUZZ

// You are an astronaut exploring Planet FizzBuzz. The inhabitants communicate using a strange counting system:

// 1. Print numbers from 1 to 50.
// 2. For multiples of 3, the aliens say "Fizz" instead of the number.
// 3. For multiples of 5, they say "Buzz".
// 4. For numbers divisible by both 3 and 5, they say "FizzBuzz".

// Your mission: Translate their counting system to console logs so humans can understand!

//Stretch 1: Solution 1 using FOR LOOP

for (let i = 1; i <= 50; i++){
  if(i % 3 === 0 && i % 5 === 0 ){
    console.log("FizzBuzz");
  }
  else if(i % 5 === 0){
    console.log("Buzz")
  }
  else if(i % 3 === 0){
    console.log("Fizz")
  }
}

//Stretch 1: Solution 2 using WHILE LOOP
let count = 50;
while(count <= 0){
  if(count % 3 === 0 && count % 5 === 0){
    console.log("FizzBuzz");
  }else if(count % 3 === 0){
    console.log("Fizz");
  }else if(count % 5 === 0){
    console.log("Buzz");
  }
  count--;
}