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