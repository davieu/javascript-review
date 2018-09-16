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

/********************************************************************
 * Functions
 */

 /*
 function calculateAge(birthYear) {
    return 2018 - birthYear;
 }

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year)
    var retirement = 65 - age;
    if (retirement <= 0) {
        console.log(firstName + ' is already retired');
    } else if (retirement === 1) {
        console.log(firstName + ' retires in ' + retirement + ' year.')
    } else {
    console.log(firstName + ' retires in ' + retirement + ' years.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1955, 'Jane');
yearsUntilRetirement(1954, 'Bob');
*/

/***********************************************************************
 * Function statements and Expressions
 */

 /*
//FUNCTION DECLARATION - do not produce immediate results
// function whatDoYouDo(job, firstName) {
// };

// FUNCTION EXPRESSION - produce immediate result/value
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful sites';
        default:
            return firstName + ' does something else';
    }
 };

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Jane'));
 console.log(whatDoYouDo('retired', 'Mark'))

 //statements and expressions - 
 //expressions are code that always produce a value ex. 
 // 2 + 3 value is 5
 // whatDoYouDo('teacher', 'John')  //value is "John teaches kids how to code"
 // typeof 23   //the value is "number"
 
 //statements: they just perform actions. do not produce immediate results or values
 // if/else, while loops, or function declaration
 // if (true) { console.log(23)} //true and logs 23
 */

 /*****************************************************************************
  * Arrays
  */

  /*
  //initialize new array
  var names = ['John', 'Mark', 'Jane'];
  //other way of making arrays. Not as widely used
  var years = new Array(1990, 1969, 1948);

  console.log(names); //whole array
  console.log(names[1]); //Mark
  console.log(names[2]); //Jane
  console.log(names.length); //3

  //mutate array data
  names[1] = 'Ben';
  names[names.length] = 'Mary';
  names[5] = "Bob"
  console.log(names); //"John", "Ben", "Jane", "Mary", empty/undefined, "Bob"

//different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); //pushes 'blue' to the end of array, "John", "Smith", 1990, "teacher", false, "blue"
john.unshift('Mr.'); //adds 'Mr.' to beginnning of array, "Mr.", "John", "Smith", 1990, "teacher", false, "blue"
console.log(john);

john.pop(); //removes element from the end.
john.shift(); // removes element from the beginning
console.log(john);   //"John", "Smith", 1990, "teacher", false

console.log(john.indexOf('teacher'));  //3 //indexOf returns the position of the argument that we pass in
console.log(john.indexOf('designer')) //-1 // indexOf will return -1 if the argument is not found

var isDesigner = john.indexOf('teacher') === -1 ? john[0] + ' is NOT a designer' : john[0] + ' is a ' + john[3] + '.';
console.log(isDesigner); //John is NOT a designer
*/

/********************************************************************************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the 
bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

var bills = [124, 48, 268];

function tipCalculator(bill) {
    var tips = [];
    var total = [];
    return function() {
        for (var i = 0; i < bill.length; i++) {
            if (bill[i] < 50) {
                //same as the others below but without variables
                tips.push((bill[i] * .20).toFixed(2))
                total.push((bill[i] * .20 + bill[i]).toFixed(2))

            } else if (bill[i] >= 50 && bill[i] <= 200) {
                var tipIt2 = bill[i] * .15;
                var preTotal2 = tipIt2 + bill[i] 

                tips.push(tipIt2.toFixed(2))
                total.push(preTotal2.toFixed(2));

            } else if (bill[i] + bill[i] > 200) {
                var tipIt3 = bill[i] * .10;
                var preTotal3 = tipIt3 + bill[i]

                tips.push(tipIt3.toFixed(2))
                total.push(preTotal3.toFixed(2));

            } else {
                console.log('error')
            }
        }
        return [tips, total];
        //es6 object return, both work
        //return {tips, total};
    }
}
var billTips = tipCalculator(bills)();

console.log('bills ' + bills)
//returned as object
// console.log('bill tips ' + billTips.tips)
// console.log('bill total ' + billTips.total)
//returned as array
console.log('bill tips ' + billTips[0])
console.log('bill total ' + billTips[1])