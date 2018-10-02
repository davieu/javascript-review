/*************************************************************************
 * LET AND CONST
 */


//var is function scoped
//let and const are block scoped

/*
 //es5
 var name5 = 'jane Smith';
 var age5 = 23;
 name5 = 'jane Miller';
 console.log(name5);

 //es6
 const name6 = 'jane smith';
 let age6 = 23;

 //variables are immutable cannot change them
//  name6 = 'jane miller';
 console.log(name6);

//es5 
function driversLicense5(passedTest) {

    if (passedTest) {
        var firstName = 'john';
        var yearOfBirth = 1990;
        console.log(firstName + ' born in ' +  yearOfBirth)
    }
}
driversLicense5(true); // john born in 1990


//es6
driversLicense6 = (passedTest) => {

    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'john';
    }
    console.log(firstName + ' born in ' +  yearOfBirth)
}
driversLicense6(true); // john born in 1990

//let is block scoped
let i = 23;

for (let i = 0; i < 4; i++) {
    console.log(i);
} // 0, 1, 2, 3, 4

console.log(i);  //23



//not block scoped
var j = 23;

for (var j = 0; j < 4; j++) {
    console.log(j);
} // 0, 1, 2, 3, 4

console.log(j);  //23
*/


/**************************************************************************************
 * BLOCKS AND IIFEs
 */


 /*
 //es6
 {
     const a = 1;
     let b = 2;
     var c = 3;
 }
console.log(c); //3

 //es5
 (function() {
    var c = 3;
 })();

//  console.log(c);
*/


/*********************************************************************************
 * STRINGS
 */

 /*
 let firstName = 'john';
 let lastName = 'smith';
 const yearOfBirth = 1990;
 calcAge = (year) => {
     return 2016 - year;
 }

//  calcAge = year => 2016 - year;   -----shorter way of writing

 //es5
 console.log('This is ' + firstName + ' ' + lastName + 
 '. He was born in ' + yearOfBirth + '. Today he is ' +
  calcAge(yearOfBirth) + ' years old.');


//es6 template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('h'));
console.log(n.includes('jo'));
console.log(firstName.repeat(3))
console.log(`${firstName} `.repeat(3))
console.log(n);
*/