// keys get converted into strings. but you don't have to use strings when assigning them - they will be automatically converted 
var myDog = {
    "name": "Dom", 
    "legs": 2,
    "tails": 0, 
    "friends": [0]
};

// access the values inside of an object with dot notation 
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;     
var shirtValue = testObj.shirt;   

// if there are spaces in the key you can use bracket notation to access the values 
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// you can use variables to pull values in brackets 
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  var playerNumber = 16;
  var player = testObj[playerNumber];

// Change the value 
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder"

// Make a new pair
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof"

// delete a pair
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails

// using object instead of switch case 
function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
    let lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago", 
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"
    }
    // switch(val) {
    //   case "alpha":
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    //     break;
    //   case "delta":
    //     result = "Denver";
    //     break;
    //   case "echo":
    //     result = "Easy";
    //     break;
    //   case "foxtrot":
    //     result = "Frank";
    // }
    result = lookup[val]
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");
  