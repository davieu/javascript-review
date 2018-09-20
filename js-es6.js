/*********************************************************
 * block and IIFEs
 */

 /*
 {
     const a = 1;
     let b = 2; 
     var c = 3;
 }

//  console.log(a + b);
console.log(c);

 //ES5 

 (function() {
     var c = 3;
 })();

//  console.log(c);
*/

let firstName = 'john';
let lastName = 'smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);