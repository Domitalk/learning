// string literals 
let myFirstName = "Dominic"; 
let myLastName = "Chu";

// sometimes inside of a String, you need to use the "" so \ lets js know its not the end of the string \" lets you 
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

// you can use ' and "  interachangeably in js. often this can help esp with jsx or html 
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


var myStr = "FirstLine\n\t\\SecondLine\nThirdLine" 
// FirstLine
//     \SecondLine
// ThirdLine

    // \'	single quote
    // \"	double quote
    // \\	backslash
    // \n	newline
    // \r	carriage return
    // \t	tab
    // \b	word boundary
    // \f	form feed

// You can concat with plus operator, but make sure to add spaces as desired 
var myStr = "This is the start. " + "This is the end."

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

var myName = "Dominic";
var myStr = "My name is " + myName + " and I am well!";

var someAdjective = "awesomesauce";
var myStr = "Learning to code is ";
myStr += someAdjective; 

// .length is a String.prototype 
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

// Bracket notation with index value can be used on strings 
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; 

// string values are immutable so you can't just change the [0] index to "H". You would have to split or charAt for this or else just completely change the whole thing 
var myStr = "Jello World";

myStr = "Hello World"; 

// third char is index 2 
var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2]; 
//use .length to work from the end of the available index
var lastLetterOfLastName = lastName[lastName.length - 1];
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//Madlibs using multiple variables 
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 

// arrays can hold different datatypes
var myArray = ["string", 1];
// multi-dimensional arrays 
var myArray = [[1, 2], ["a", "b"]];

// index lookup 
var myArray = [50,60,70];
let myData = myArray[0]
// arrays are mutable 
myArray[1] = 20

// chaining index for AoA
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];

// push to end of array 
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

// pop last element from array
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
// removedFromMyArray == ["cat", 2]
// myArray == [["John", 23]]

// shift first element from array 
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
// removedFromMyArray == ["John", 23]
// myArray == [["dog", 3]]

// unshift a new element to the beginning of an array
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])
// myArray == [["Paul", 35], ["dog", 3]]

// The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
// There should be at least 5 sub-arrays in the list.

var myList = [];
myList.push(["a", 1])
myList.push(["b", 2])
myList.push(["c", 3])
myList.push(["d", 4])
myList.push(["e", 5])

// define a reusable function and call it 
const reusableFunction = () => {
    console.log("Hi World")
}  
reusableFunction()

// define reusable function wtih arguments 
const functionWithArgs = (arg1, arg2) => {
    console.log(arg1 + arg2)
}
functionWithArgs(1, 2)


// var makes scoped variable, no var definition makes a global variable 
// top level scope myGlobal 
var myGlobal = 10 
function fun1() {
    // no var so this automatically becomes a global 
    oopsGlobal = 5
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
  var myVar = ""
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// this should throw an error because myVar is scoped inside of the myLocalScope function 
console.log('outside myLocalScope', myVar);


var outerWear = "T-Shirt";
function myOutfit() {
  // local scope take precedence over the global 
  var outerWear = "sweater"
  return outerWear;
}

myOutfit();