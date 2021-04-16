// queue is a data structure where items are kept in order 
// new items added to the back and front is removed like a queue 
function nextInLine(arr, item) {
    arr.push(item)
    const removed = arr.shift()
    return removed;
  }
  
  var testArr = [1,2,3,4,5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));



function welcomeToBooleans() {
    return true; 
}

// if statements w/boolean
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true"
  } else {
    return "No, that was false"
  }
}

// comparison operators == 
// when different datatype, it will coerce to be able to compare 
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// strict equality won't coerce type conversion 
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

// inequality operator 
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// strict inequality operator 
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

// greater than operator will convert data types when comparing 
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }
  if (val > 10) {  
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

// greater or equal 
function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }
  if (val >= 10) {  
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

// less than
function testLessThan(val) {
  if (val < 25) {  
    return "Under 25";
  }
  if (val < 55) {  
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

// less than or equal to 
function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);