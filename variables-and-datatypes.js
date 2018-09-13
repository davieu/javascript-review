/*************************************
 * Basic Operator
 */

 /*
var year, yearJoh, yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;

//math operator
yearJohn = year - 28;
yearMark = year - 33;

console.log(yearJohn);

console.log(year + 2);
console.log(year * 2);
console.log(year /10);

//logical operator
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older then john');
var x;
console.log(typeof x);
*/

/*****************************************
 * Operator precedence
 */

/*
var now = 2018;
var yearJohn = 1989
//29
var fullAge = 18;

//multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average)

//multiple assignments
var x, y;
//assignments start from right-to-left. it assigns the y first then it assigns the x.
x = y = (3 + 5) * 4 - 7; //26
console.log(x, y); //x=26, y=26

//more operators
//x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x)
x++
console.log(x)
x--
console.log(x)
 */

 /***************************************************
  * Coding challenge
  * 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

/*
var markHeight, markMass, johnHeight, johnMass;
var BMI;

markHeight = 1.69;
markMass = 78;
johnHeight = 1.95;
johnMass = 92;

function BMI(height, mass) {
    return mass / Math.pow(height, 2);
}

var markBMI = BMI(markHeight, markMass);
var johnBMI = BMI(johnHeight, johnMass);

console.log('this is Mark\'s BMI: ' + markBMI);
console.log('this is John\'s BMI: ' + johnBMI);
var BMIboolean = markBMI > johnBMI;
console.log('is Mark\'s BMI higher than John\'s BMI?:\n' + 'Mark: ' + markBMI.toFixed(2) + ' ' + 'John: ' + johnBMI.toFixed(2) + ' ---- ' + BMIboolean);
*/

/**********************************************************
 * If ELSE statements
*/

/*
var firstName = 'john';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName+ ' will hopefully marry soon')
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName+ ' will hopefully marry soon')
}

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn= 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s')
}
*/

/*********************************************************************
 * Boolean logic
 */

 /*
 var firstName = 'John';
 var age = 30;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
 } else {
    console.log(firstName + ' is a man.')
 };

 age >= 20; //false
 age < 30; //true
 !(age < 30); //false - it gets inverted

 age >= 20 && age < 30; //false
 age >= 20 || age < 30; //true
 */