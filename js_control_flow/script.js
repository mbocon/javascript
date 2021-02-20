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

// Create a loop that logs the numbers from 0-99 (ascending)
// Create a loop that logs the numbers from 99-0 (descending)
// Create a loop that logs the EVEN numbers from 0-98 (ascending)
// Create a loop that logs the EVEN numbers from 98-0 (descending)
// Create a loop that logs the ODD numbers from 0-99 (ascending)
// Create a loop that logs the ODD numbers from 99-0 (descending)
// Create a loop that logs the numbers from 49-72 (ascending)
// Create a loop that logs the numbers from 81-26 (descending)
// Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)

