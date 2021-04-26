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

// conditonal ternary operator 
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal"
}
checkEqual(1, 2);

// chained conditional ternary operators 
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
checkSign(10);


// this should return [5, 4, 3, 2, 1]
function countdown(n){
    if (n < 1) {
      return []
    } else {
        // 4
      const countArray = countdown(n - 1) 
      // 5 unshift == before 
      countArray.unshift(n)
      return countArray 
    }
}
console.log(countdown(5))

// this should return [1, 2, 3, 4, 5]
function countup(n) {
    if (n < 1) {
      return [];
    } else {
        // countArray = [4] 
      const countArray = countup(n - 1);
        // 5 push == after 
      countArray.push(n);
      return countArray;
    }
}
console.log(countup(5));
  

// rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
function rangeOfNumbers(startNum, endNum) {
    // if (endNum - startNum === 0) {
    //   return [startNum];
    // } else {
    //   var numbers = rangeOfNumbers(startNum, endNum - 1);
    //   numbers.push(endNum);
    //   return numbers;
    // }
    if (startNum == endNum) {
      return [startNum]
    } else {
        // incremented + 1 startNum
      let returnArr = rangeOfNumbers(startNum + 1, endNum) 
      // put before the original startNum
      returnArr.unshift(startNum)
      return returnArr
    }
};
  
  