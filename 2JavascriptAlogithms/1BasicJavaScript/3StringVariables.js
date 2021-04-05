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