
// var allows you to overwrite a previous var declaration 
// let will throw an error if you try 
let catName;
let quote;
function catTalk() {
    // this enables strict mode, which catches common coding mistakes 
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// with let we have a super narrow scope of inside the (if) statement 
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

function printManyTimes(str) {
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");