// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a; 
// will assign b = 7 
a = 8;
// the change 
console.log(b)
// b will still show 7 

// when assigning, it will only take the VALUE from a and not link it to a itself

var c = 9; 
// declare and assign at the same time 



// when declared but not defined, variables come out as undefined 
// when attempting to do math on undefined, it will result in NaN 
// when attempting to do string work on undefined, it will force convert undefined into "undfined"
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";




// javascript variables are case sensitive. 
// use camel case
// try not to name similar things with diff capitalization 

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


var sum = 10 + 10;
var difference = 45 - 33;
var product = 8 * 10;
var quotient = 66 / 33;

var myVar = 87;
myVar++;
// You can easily increment or add one to a variable with the ++ operator.

// i++;
// is the equivalent of

// i = i + 1;
// Note: The entire line becomes i++;, eliminating the need for the equal sign.

var myVar = 11;
myVar--;

// You can easily decrement or decrease a variable by one with the -- operator.

// i--;
// is the equivalent of

// i = i - 1;
// Note: The entire line becomes i--;, eliminating the need for the equal sign.

var ourDecimal = 5.7;
//  floating point numbers or floats.
var myDecimal = 1.1

// In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.
var product = 2.0 * 2.5;
var quotient = 4.4 / 2.0; 

// The remainder operator % gives the remainder of the division of two numbers.
var remainder = 11 % 3

var a = 3;
var b = 17;
var c = 12;

a = a + 12 
// because a = a + ___ is so common, we have += operator 
a += 12;
b += 9;
c += 7;
// similarly, -= 
a -= 6;
b -= 15;
c -= 1;
// and the *= operator 
a *= 5;
b *= 3;
c *= 10;
// and the /= operator 
a /= 12;
b /= 4;
c /= 11;