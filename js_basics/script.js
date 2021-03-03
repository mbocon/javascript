// What is control flow?
// The way we direct our code to function based on certain conditions

/* TRUTHY/FALSY
What is falsey?
Datatypes:  null, undefined
Values: false, 0, NaN && "" <-- empty string
NaN === number datatype ex: 'hello' * 2 === NaN (when a mathmatical equation
evaluates to a non numerical value)
 */

//  if (NaN) {
//     console.log('truthy')
//  } else {
//     console.log('falsey')
//  }

 /* THE NOT OPERATOR
! aka the 'bang operator'
!false === true
!null === true
!3 === true
!'' === true

Double bang !! (it's not not)
!!true === true 
!!0 === false
!![] === true
!!{} === true
!!function(){} === true
 */

// console.log(!true)

/* COMPARISON OPERATORS
== loose equality
=== strict equality
!= loose inequality
!== strict inequality
< less than
> greater than
<= less than or equal to
>= greater than or equal to
*/

/* LOGICAL OPERATORS
|| OR (looks for the first truthy operand and returns it or returns last false operand)
&& AND (looks for the first falsey)

'hello' || 'goodbye' === 'hello'
'hello' && 'goodbye' === 'goodbye'
false || false || '' === ''
false || false || true || false === true (short circuit) 


true && false === false
false && true === false
true && true && false === false
*/

/* BRANCHING CONTROL FLOW

Single path

let val = 1;
if (val === 1) {
    console.log('This printed because the expression in the parens is truthy')
} 

Dual path

let val = 2;
if (val === 1) {
    console.log('This printed because the expression in the parens is truthy')
} else {
    console.log('We see this because the express is falsey')
}

Multi path

let val = 3
if (val === 1) {
    console.log('This printed because the expression in the parens is truthy')
} else if (val === 2) {
    console.log('We see this because the express is falsey')
} else {
    console.log('The val is not 1 or 2')
}
 */

/*  LOOPING CONTROL FLOW

While statement

let word = '';
let words = [];

while(word !== 'end'){
    word = prompt('enter a word ("end" to quit)')
    if (word !== 'end') words.push(word);
    alert('You have entered ' + words.join(', '))
}

Do while statement

do {
    var word = prompt('Enter a word ("end" to quit)');
    if (word !== 'end') words.push(word);
    alert('You have entered ' + words.join(', '))    
} while (word !== 'end)


For statement
    initialzer condition increment
for(let i = 0; i < 10; i++) {
    console.log(i);
}

*/


// Practice Exercises

// // Create a loop that logs the numbers from 0-99 (ascending)
// for (i = 0; i <= 99; i++) {
//     console.log(i)
// }

// // Create a loop that logs the numbers from 99-0 (descending)
// for (i = 99; i >= 0; i--) {
//     console.log(i)
// }
// // Create a loop that logs the EVEN numbers from 0-98 (ascending)
// for (i = 0; i <= 98; i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

// // Create a loop that logs the EVEN numbers from 98-0 (descending)
// for (i = 98; i >= 0; i--) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
// // Create a loop that logs the ODD numbers from 0-99 (ascending)
// for (i = 0; i <= 99; i++){
//     if(i % 2 != 0) {
//         console.log(i)
//     }
// }

// // Create a loop that logs the ODD numbers from 99-0 (descending)
// for (i = 99; i >= 0; i--){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }
// // Create a loop that logs the numbers from 49-72 (ascending)
// for (let i = 49; i <= 72; i++) {
//     console.log(i)
// }
// // Create a loop that logs the numbers from 81-26 (descending)
// for (let i = 81; i >= 26; i--) {
//     console.log(i)
// }
// // Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)
// for (let i = 3; i <= 90; i++) {
//     if (i % 3 === 0) {
//         console.log(i)
//     }
// }

// function computeArea(height, width) {
//     const area = height * width
//     return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units. `
// }

// console.log(computeArea(4, 12))

// Write a function named planetHasWaterusing the function expression syntax.
// It will have one parameter: planet.
// Return trueif the planetargument is either “Earth” or “Mars”, otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in (‘earth’, ‘MARS’, etc.).
// Invoke the function a couple of times to test it!

const planetHasWater = function(planet)  {
    planet = planet.toLowerCase();
    return planet === 'earth' || planet === 'mars'
}

console.log(planetHasWater('Earth'))



// Last Two Exercises

/*
The following JavaScript code will accept string input from the user and store the string in a variable named choice:

let choice = prompt('Enter a, b or c');
Write an if statement that console.logs the following messages:

a entered - "a is for apple"
b entered - "b is for banana"
c entered - "c is for cantaloupe"
anything else - "you're a rebel"


 */
// let choice = '';

// while(choice !== 'no more letters') {
//   choice = prompt('Enter a, b or c');
//   if (choice === 'a') {
//     console.log('a was entered');
//   } else if (choice === 'b') {
//     console.log('b was entered');
//   } else if (choice === 'c') {
//     console.log('c was entered');
//   } else {
//     console.log('you are a rebel');
//   }
// }



/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// FOR OF AND FOR IN LOOP WITH ARRAYS AND OBJECTS



// try running these functions one by one and notice how you can access data and see what is returned

const myArr = ['Apple', 'Banana', 'Orange'];

// for in loop with an ARRAY
for (element in myArr) {
  // simply logging the element using a for in loop on an array returns the index position
  console.log(element, 'is the index position in myArr')
}

for (element in myArr) {
  // using bracket notation returns the value using a for in loop on an array
  console.log(myArr[element], 'is the value in myArr')
}


// for of loop with an ARRAY
for (element of myArr) {
  console.log(element, `is the value`)
  console.log(myArr[element], 'is returned because of how the for of loop works') // returns UNDEFINED
}

const myObj = { 
  'iPhone': 999, 
  'Laptop': 2000,
  'TV': 500
 };

// for in loop with an OBJECT
for (element in myObj) {
  console.log(element, 'is the key', myObj[element], 'is the value')
}

// for of loop on an OBJECT
for (val of myObj) {
  console.log(val) // WILL NOT WORK
}





/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// ARRAYS
// Why do we need arrays?

// const colors = ['red', 'green', 'blue'];

// create a movies arrays

const movies = ['Interstellar', 'Contact', 'Alita - Battle Angel'];

// access elements using indexing

// access first element
// console.log(movies[0])


// access the last element

// console.log(movies[movies.length - 1]) 


// access the 2nd element

// console.log(movies[1]);


// Array Methods

// .push() > adds to the end of the array

movies.push('Kung Fury', 'Wall-E', 'Short Circuit')

// unshift > add to the front of the array

movies.unshift('Star Ways - A New Hope');

// Removing from the front of the Array

// .pop() remove from the end of the array

movies.pop();
// console.log(lastMovie);

// .shift() remove from the front of the array

movies.shift();


// .splice() add or remove any number of element from any position of the array


const removedMovies = movies.splice(3, 1, 'Alien', 'Scarface');


// console.log(removedMovies)

const removedMovies2 = movies.splice(3, 1)

// console.log(removedMovies2)

movies.splice(2, 0, 'LOTR')

// .slice() slice out a copy of elements from the array we call on

const moviesPartialCopy = movies.slice(0, 3);


// console.log(moviesPartialCopy)
// console.log(movies);



// .forEach -> call a function for each element in the array we call on

// movies.forEach(function(movie, index) {
//   console.log(index + ') ' + movie);
// });


// Other ways to iterate an array using for ... of loops

// for(let movie of movies) {
//   console.log(movie);
// }

// Make a copy of the Array using the spread operator

const moviesCopy = [...movies];

// const moviesReference = movies

// console.log(moviesReference === movies);

const moreMovies = ['Sound of Music', ...movies, 'Jurassic Park'];

// console.log(moreMovies)


// Create a string from the contents of an Array

// .join() creates a string

console.log(movies.join(', '))

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// FUNCTIONS 


// Function declaration vs Function Expression


// declaration

// sayHello('Alita');

function sayHello(name) {
  console.log('hello ' + name)
}


// expression
const sayHello2 = function(name) {
  console.log('hello ' + name);
}

// sayHello2('Alita');


// Let's define another function

function areBothEven(n1, n2) {
  console.log(!(n1 % 2) && !(n2 % 2));
}

// console.log('this is what the func returns -> ', areBothEven(2, 5))


// Write a function declaration exercise

function computeArea(w, h) {
  // const area = w * h;
  return `The area of a rectangle with a width of ${w} and a height of ${h} is ${w * h} square units`;
}

// const area = computeArea(3, 3);

// Write a function expression

// const planetHasWater = function(planet) {
//   planet = planet.toLowerCase();
//   return planet === 'earth' || planet === 'mars';
// }




/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// OBJECTS


// let's create a game object

const game = { 
  title: 'Guess the Number!', 
  smallestNum: 0,
  biggestNum: 100,
  numGuesses: 0,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1) + this.smallestNum)
  }
};

game.play()



// some other code or function down here later in our program
// game.smallestNum = 0;

// later on in our program
// game.numGuesses = 0;
// game.smallestNum = 1;

// for (let key in game) {
//   console.log(game[key]);
// }

// Object static methods - methods that are callable on the Object class

// Object.keys - gets an array of the object's keys

// console.log(Object.keys(game));

// Object.values - gets an array of the object's values

// console.log(Object.values(game));

// Object.entries - gets an 2D array of the the object's key: value pairs

// console.log(Object.entries(game));



// console.log(game);


// demo of one use case for object square bracket notation

const catalog = {
  'abc-123': 12.99,
  'xyz-456': 6.99,
  'jkl-789': 13.95,
};

delete catalog['abc-123'];
// console.log(catalog);


// console.log(catalog['arf-724'])

// let sku = '';

// do {
//   var sku = prompt('Enter SKU or "quit" to exit: ');
//   if(sku in catalog) {
//     let price = catalog[sku];
//     alert('The price of ' + sku + ' is ' + price);
//   } else if(sku !== 'quit') {
//     alert('Invalid SKU - Please try again');
//   }
// } while(sku !== 'quit');

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// CLASSES 



// let's define our first class

class Vehicle {
  constructor(vin, make, model) {
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.running = false;
  }
  start() {
    this.running = true;
    console.log('running ... ');
  }
  stop() {
    this.running = false;
    console.log('stopped ... ')
  }
  toString() {
    return `Vehicle (${this.vin}) is a ${this.make} model ${this.model}`
  }
  static about() {
    console.log('I am the Vehicle class');
  }
}

// instantiate the class

// const v1 = new Vehicle('X123Y', 'Boeing', '747'); // this is a Vehicle class instance - a vehicle object

// const car = new Vehicle('A1234', 'Toyota', 'Camry');

// const cars = [];

// for(let i = 0; i < 6; i++) {
//   cars.push(new Vehicle(Date.now(), 'Toyota', 'Camry'))
// }

// console.log(cars)

class Plane extends Vehicle {
  constructor(vin, make, model, airline) {
    super(vin, make, model);
    this.airline = airline;
  }
  engageAutoPilot() {
    console.log('Look mom, no hands!');
  }
}

const spyPlane = new Plane('top secret', 'Lockheed', 'SR-71', 'USAF');

// console.log(spyPlane);


class Automobile extends Vehicle {
  constructor(vin, make, model, numDoors) {
    super(vin, make, model);
    this.numDoors = numDoors;
  }
  honk() {
    console.log('Beep!');
  }
}

const fastCar = new Automobile('TS123z', 'Tesla', 'P100D', 4);

console.log(fastCar)




















