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

// "logical AND" && checks both operands 
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

// "logical OR" || operator 
function testLogicalOr(val) {
  if (val > 20 || val < 10) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

// if + else if statment 
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

// if + else if + else 
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

// order of if statements 
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

// else if chain
function testSize(num) {
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium" 
  } else if (num < 20) {
    return "Large"
  } else if (num >= 20) {
    return "Huge"
  }
}
testSize(7);


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }
}
golfScore(5, 4);


// using switch statements instead of a long chain of else if 
// switch uses === strict equality operator
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1: 
      answer = "alpha"
      break;
    case 2: 
      answer = "beta"
      break;
    case 3: 
      answer = "gamma"
      break;
    case 4:
      answer = "delta"
      break;
  }
  return answer;
}
caseInSwitch(1);

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple"
      break;
    case "b":
      answer = "bird"
      break;
    case "c":
      answer = "cat"
      break;
    default: 
      answer = "stuff"
      break;
  }
  return answer;
}
switchOfStuff(1);

function sequentialSizes(val) {
  var answer = "";

  switch (val) {
    case 1:
    case 2: 
    case 3:
      answer = "Low"
      break;
    case 4:
    case 5:
    case 6: 
      answer = "Mid"
      break;
    case 7:
    case 8:
    case 9:
      answer = "High"
      break;
  }

  return answer;
}
sequentialSizes(1);


function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley"
      break;
    case 42: 
      answer = "The Answer"
      break;
    case 1: 
      answer = "There is no #1"
      break;
    case 99: 
      answer = "Missed me by this much!"
      break;
    case 7: 
      answer = "Ate Nine"
      break;
  }
  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }
  return answer;
}
chainToSwitch(7);