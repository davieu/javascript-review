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


/*******************************************************************************
 * ARROW FUNCTIONS
 */

 /*
const years = [1990, 1965, 1982, 1937];

 //es5
var ages5 = years.map(function(el) {
    return 2016 - el
});
console.log(ages5);


//es6 longer version
const ages66 = years.map((el) => {
    return 2016 - el;
});
console.log(ages66);


//es6
let ages6 = years.map(el => 2016 - el)
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`
});
console.log(ages6);
*/


/********************************************************************************
 * ARROW FUNCTIONS LEXICAL "this"
 */

 /*
 //es5
 var box5 = {
     color: 'green',
     position: 1,
     clickMe: function() {

        //you have to put this in a var to be able to use the properties of the object
        var self = this;
         document.querySelector('.green').addEventListener('click', function () {
             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
             alert(str);
         });
     }
 }
//  box5.clickMe();


 //es6
 const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        //arrow function shares the lexical this keyword of its surroundings
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();


 //es66  making the method into an arrow function makes it share the lexical this 
 //keyword from its surroundings which is the global this keyword which is the global object window
 /*  
 const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        //arrow function shares the lexical this keyword of its surroundings
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();
*/

/*
//call, bind, apply allow us to define the this variable manually
// and bind creates a copy of the function while call calls it immediately

function Person(name) {
    this.name = name;
}

//es5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['bob', 'jane', 'mark'];
new Person('john').myFriends5(friends);


//es6
function Person(name) {
    this.name = name;
}


//es5
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('john').myFriends6(friends);
*/


/******************************************************************************
 * DESTRUCTURING
 */

 /*
 //ARRAY
 var john = ['john', 26];
//  var name = john[0];
//  var age = john[1];

 const [name, age] = ['john', 26];
 console.log(name);
 console.log(age);


 //OBJECT
 const obj = {
    firstName: 'john',
    lastName: 'smith'
 };

 const {firstName, lastName} = obj;
//  console.log(firstName);
//  console.log(lastName);
 
 const {firstName: a, lastName: b} = obj;
 console.log(a);
 console.log(b);
 */


/*
calcAgeRetirement = (year) => {
    age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/


/************************************************************************
 * ARRAYS in es6
 */


//Array.from() *********  makes a nodelist gathered from the html into an array

/*
 //es5
 const boxes = document.querySelectorAll('.box');

 var boxesArr5 = Array.prototype.slice.call(boxes);
 boxesArr5.forEach((cur) => {
    cur.style.backgroundColor = 'dodgerblue';
 });

 console.log(boxesArr5);



 const boxesArr6 = Array.from(boxes);

 boxesArr6.forEach((cur) => {
    cur.style.backgroundColor = 'dodgerblue';
 })


//  boxesArr6.map((cur) => {
//      cur.style.backgroundColor = 'red';
//  })
*/


//es5
/*
for (var i = 0; i < boxesArr5.length; i++) {
    
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue';
}
*/


/*
//es6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue';
}


//es5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map((cur) => {
    return cur >= 18;
})
console.log(full); //[false, false, false, true, false, false]
console.log(full.indexOf(true));  //3
console.log(ages[full.indexOf(true)]);  //21

//es6
//has access to the current element, current index, and whole array
console.log(ages.findIndex(cur => cur >= 18));  //3
console.log(ages.find(cur => cur >= 18))  //21
*/


/**************************************************************************
 * SPREAD OPERATOR
 */

 /*
 addFourAges = (a, b, c, d) => {
     return a + b + c + d;
 }

 var sum1 = addFourAges(18, 30, 12, 21);
 console.log(sum1);

 //es5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);;
console.log(sum2);


//es6
const sum3 = addFourAges(...ages);
console.log(sum3)


const familySmith = ['john', 'jane', 'mark'];
const familyMark = ['mary', 'bob', 'ann'];
const bigFamily = [...familySmith, 'lily', ...familyMark]
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
console.log(all);
*/


/*************************************************************
 * REST PARAMETERS
 */