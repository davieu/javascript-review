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

 /**********************************************************************
  * Ternary operator and switch statements
  */
/*
var firstName = 'john';
var age = 18;

// ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)

//if else
if (age >= 18) {
    var ofAge = age + ' yes';
} else {
    var ofAge = age + ' no'
}
console.log(ofAge);


//switch statement
var job = 'programmer';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
    case 'taxi':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer' :
    case 'coder' :
    case 'programmer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 30;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.')
};

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//    console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//    console.log(firstName + ' is a young man.')
// } else {
//    console.log(firstName + ' is a man.')
// };
*/


/**************************************************************************
 * Truthy and falsy values and equality operators
 */

 //falsey values: undefined, null, 0, '', NaN
 //truthy values: anything that is NOT falsy values

 /*
 var height;
 height = 23;

 if (height || height === 0) {
     console.log('variable is defined');
 } else {
     console.log('variable has not been defined');
 }

 if (height == '23') {
     console.log('the == operator does type coercion');
 }

 */

 /***************************************************************************
  * Coding challenge 2

 John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
 1. Calculate the average score for each team
 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
  */

 /* 
var johnTeam = ['john', 70, 134, 105];
var mikeTeam = ['mike', 116, 94, 123];
var maryTeam = ['mary', 97, 134, 105];

function average(team) {
    var sum = 0
    for (var i = 1; i < team.length; i++) {
        sum += team[i]
    }
    return sum / 3;
}

var johnAverage = average(johnTeam);
var mikeAverage = average(mikeTeam);
var maryAverage = average(maryTeam);
console.log(johnAverage);
console.log(mikeAverage);
console.log(maryAverage);

function highestAverage(team1, team2, team3) {
    if (team1 > team2 && team1 > team3) {
        console.log(johnTeam[0] + ' ' + johnAverage +  ' is greater than Mike: ' + mikeAverage + ' and ' + maryTeam[0] + ' ' + maryAverage);
    } else if (team2 > team1 && team2 > team3) {
        console.log(mikeTeam[0] + ' ' + mikeAverage + ' is greater than John: ' + johnAverage + ' and ' + maryTeam[0] + ' ' + maryAverage);
    } else if (team3 > team1 && team3 > team2) {
        console.log(maryTeam[0] + ' ' + maryAverage + ' is greater than John: ' + johnAverage + ' and ' + mikeTeam[0] + ' ' + mikeAverage);
    } else { 
        console.log('It is a tie');
    }
};

var averageHigh = highestAverage(johnAverage, mikeAverage, maryAverage);
*/

