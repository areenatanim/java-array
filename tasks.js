// tasks number one
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits [3] = "jambura"

console.log(fruits[3]);
console.log(fruits.indexOf("cherry"));
console.log(fruits );

// tasks number two

let touristDestination = ["Paris", "Rome", "Tokyo", "New York", "London"]
touristDestination.push("Dublin");
touristDestination.push("canada","bangaladesh")
touristDestination.pop()
console.log(touristDestination);

// tasks number three includes

const books = [ "bangla", "english", "math", "javascript", "python"];

console.log(books.includes("javascript"));
console.log(books.includes("java"));

// tasks number four isarray

let pencile = ["pencil", "eraser", "sharpner", "ruler", "pencil"];
let math = [];
let pen = "black-ink, red-ink, blue-ink";
console.log(Array.isArray(pencile));
console.log(Array.isArray(pen));

// by if else

if (Array.isArray(pen)) {
     console.log("i can go to shool");
}
else{
     if(Array.isArray(pencile)) {
          console.log("i will go to picnic");
     }
}
// else {
//      console.log("today is holiday");
// }


// tasks number five concat

let dolls = ["dolly", "teddy", "barbie", "polly"];
let animal = ["dog", "cat", "bird", "fish"];
console.log(dolls.concat(animal));

console.log(animal.concat("boroBoral"));

console.log(pencile.concat(dolls,animal));


