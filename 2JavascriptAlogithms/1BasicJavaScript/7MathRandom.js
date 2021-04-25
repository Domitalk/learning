// returns something between 0 and 1 
function randomFraction() {
    return Math.random();
}

// * 10 will make it between 0 and 10 
// Math.floor makes it a rounded down whole number 
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

// to create a random number within a range. 

// first assuming 0 and 10 
// 10 - 0 + 1 == 11 + 0 = 11 
// and then floor!  so it'll round down to 10 for the max and of course there's always the possibility of 0 beacuse that is the starting point always in a Math.random 
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
}

// parseInt forces a conversion into Int datatype 
function convertToInteger(str) {
    return parseInt(str)
}
convertToInteger("56");


// the second argument is the radix which specifies the base of the number in the string between 2 and 36. 
// 2 is binary  so in this situation it takes binary 10011 and makes it into 57
function convertToInteger(str) {
    return parseInt(str, 2)
}
convertToInteger("10011");