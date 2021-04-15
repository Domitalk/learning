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
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// strict equality won't coerce type conversion 
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");