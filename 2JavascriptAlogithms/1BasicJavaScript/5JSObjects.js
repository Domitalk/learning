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
    return result;
}
phoneticLookup("charlie");

// hasOwnProperty returns true or false if the key/val pair exists or not
function checkObj(obj, checkProp) {
    return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found"
}


// create nested objects 
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }, 
    {
      "artist": "A",
      "title": "a",
      "release_year": 2000,
      "formats": [
        "CD", 
        "MP3"
      ]
    }
];


// access nested objects properties 
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];


// use index to access items in array, can be nested just like objects 
// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
];
var secondTree = myPlants[1].list[1];


// CRUD within a JSON object 
// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
    if (prop != "tracks" && value.length > 0) {
      object[id][prop] = value 
    } else if (prop == "tracks" && !object[id].tracks) {
      object[id].tracks = [value]
    } else if (prop == "tracks" && value.length > 0) {
      object[id].tracks.push(value)
    } else if (value.length == 0) {
      delete object[id][prop]
    }
  
  
    return object;
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');