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


//  var boxesArr5 = Array.prototype.slice.call(boxes);
//  boxesArr5.forEach((cur) => {
//     cur.style.backgroundColor = 'dodgerblue';
//  });

//  console.log(boxesArr5);

newArray = ['yo', 'yoyo', 'yoyoyo']

 const boxesArr6 = Array.from(boxes);
 console.log(boxesArr6);
 console.log(boxes)

for (var i = 0; i < boxesArr6.length; i++) {
    boxesArr6[i].textContent = newArray[i];
    console.log(boxesArr6[i])
}

 boxesArr6.forEach((cur) => {
    cur.style.backgroundColor = 'dodgerblue';
    cur.style.color = 'red'
})
*/


//  boxesArr6.map((cur) => {
//      cur.style.backgroundColor = 'red';
//  })



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

 /*
 //es5 
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach((cur) => {
        console.log((2016 - cur) >= 18)
    });
}

//  isFullAge5(1990, 1999, 1965, 2016, 1987);

 //es6
 isFullAge6 = (...years) => {
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= 18))
 }  

 isFullAge6(1990, 1999, 1965, 2016, 1987);
*/


/*
//ES$ with a parameter. You have to exclude first one from the array
function isFullAge5(limit) {
    // console.log(arguments);
    //(arguments, 1) excludes the first paramater in the array 
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);

    argsArr.forEach((cur) => {
        console.log((2016 - cur) >= limit)
    });
}
//21 will be excluded
 isFullAge5(21, 1990, 1999, 1965);


 //ES6 with parameter the first one in array is the paramater
 isFullAge6 = (limit, ...years) => {
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= limit))
 }  

 isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
 */


 /*************************************************************************
  * DEFAULT PARAMETERS
  */

  /*
  //es5
  function SmithPerson(firstName, yearOfBirth, lastName, nationality) {


        lastName === undefined ? lastName = 'smith': lastName = lastName;
        nationality === undefined ? nationality = 'american' : nationality = nationality;
        
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
        this.lastName = lastName;
        this.nationality = nationality;  
  }

  var john = new SmithPerson('john', 1990);
  var emily = new SmithPerson('emily', 1983, 'diaz', 'spanish');
  */


  /*
  //ES6
  function SmithPerson(firstName, yearOfBirth, lastName = 'smith', nationality = 'american') {
      this.firstName = firstName;
      this.yearOfBirth = yearOfBirth;
      this.lastName = lastName;
      this.nationality = nationality;
  };

  var john = new SmithPerson('john', 1990);
  var emily = new SmithPerson('emily', 1983, 'diaz', 'spanish');
  */



  /*****************************************************************************
   * MAP DATASTRUCTURE
   */

//use anything as keys including numbers. Maps are irritable and can be easy to loop through and manipulate data. 
//Also easy to get the size of the map using the size property. You can easily add and remove data from a map.
//this is the best over objects if you want to make hash maps

/*
const question = new Map();
question.set('question', 'What is the new official name of the latest major javascript version?');
question.set(1, 'es5');
question.set(2, 'es6');
question.set(3, 'es2015');
question.set(4, 'es7');
question.set('correct', 3);
question.set(true, 'correct answer');
question.set(false, 'wrong, please try again');

console.log(question.get('question'));
console.log(question.size);

//has checks if certain key is in map
if (question.has(4)) {
    console.log('answer 4 is here')
}

//deletes everything in the map
// question.clear();

// question.forEach((value, key) => console.log(`this is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    // console.log(`this is ${key}, and it's set to ${value}`);
    if (typeof(key) === 'number') {
        console.log(`answer ${key}: ${value}`);
    }
    if(typeof(key) === 'boolean') {
        console.log(`boolean ${key}`);
    }
}

const ans = parseInt(prompt('write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

/*********************************************************************************************
 * ES6 CLASSES
 */

 /*
//es5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('john', 1990, 'teacher');


//es6
//class definitions are not hoisted. unlike function contructors we need to first implement a class
//and only later in the code you can start using them. You can only add methods to classes but not properties
class Person6 {
    contructor (name, yearOfBirth, job) {
        this.name = name; 
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    //STATIC METHODS - attached to class but not inherited by class instances(like john6)
    static greeting() {
        console.log('hey there')
    }
}

var john6 = new Person6('john', 1990, 'teacher');
console.log(new Date().getFullYear())

Person6.greeting();
*/


/***************************************************************************************
 * CLASSES WITH SUBCLASSES
 */


/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//Person5 is the super class
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

//call operator - creates a new empty object calls the athlete function constuctor 
//and sets the this keyword to the newly created empty objects

//in execution context the this keyword will point to the new empty object. if we 
//want to the Person property: name, year, and job to be set on the new athlete object
// then we need to call the Person function contructor with the this keyword also set 
//to the newly created athlete object. all the properties will be set in the new athlete
// object thats created by the new operator and thats why we need to call it here and set 
//the this variable to this

//Athlete5 is the subclass
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) 
{
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

//Person5 is the super class and proto of Athlete5. Athlete5 is the subclass
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

//object.create allows us to manually set the prototype of the object. We want
// the prototype of the Athlete to be the prototype of the Person so they become connected


var johnAthlete5 = new Athlete5('john', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


//ES6***************

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) 
    {
        //super() will call the super class
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('john', 1990, 'swimmer', 3, 10)

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/


/************************************************************************************
 * CHALLENGE 8
 */

class Streets {
    constructor(name, buildyear) 
    {
        this.name = name;
        this.buildYear = buildyear;            
    }
}

class Parks {
    constructor(name, buildyear, area, trees) 
    {
        this.name = name;
        this.buildYear = buildyear;
        this.area = area;
        this.trees = trees;
    }

    treeDensity(trees, areas) {
        var treeDensity = this.trees / this.areas
        console.log(treeDensity);
    }   
}

const nationalPark = new Parks('National Park', 1960, 300, 1000, 500);

// nationalPark.treeDensity()