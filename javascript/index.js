// get elemenet by ____ and then do something to it

const example = true; 
example ? "omg" : "it's true";

const exampleArr = [1, 2, 3, 4]
exampleArr.forEach ( element1 => {
    exampleArr.forEach( element2 => {
        element1 == element2 ? true : false; 
    })
}); 


O(1) > O(log N) > O(N) > O(N^2) > O(2^N)