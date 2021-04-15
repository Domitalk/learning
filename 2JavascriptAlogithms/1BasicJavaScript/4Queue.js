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