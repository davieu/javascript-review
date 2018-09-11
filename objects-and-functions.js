/*
//FUNCTION CONSTRUCTORS
var Person = function(name, dateOfBirth, job) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.job = job;
};

//send to person prototype. This helps save memory for big applications.
Person.prototype.calculateAge = function() {
    console.log(2018 - this.dateOfBirth);
};

Person.prototype.lastName = 'smith';

var john = new Person('john', 1992, 'poop');
var mike = new Person('mike', 1960, 'google');
var jane = new Person('jane', 1995, 'apple');

john.calculateAge();
mike.calculateAge();
jane.calculateAge();

console.log(john.lastName);

console.log(john.hasOwnProperty('job'));
//true
console.log(john.hasOwnProperty('lastName'));
//false
console.log(john instanceof Person);
//true

//console.info();
*/

//////////////////////////////////////////////////////

/*
//OBJECT.CREATE
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.dateOfBirth);
    }
}
*/

///////////////////////////////////////////////////////
/*
//PASSING FUNCTIONS AS ARGUMENTS
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

function calculateAge(el) {
    return 2018 - el;
    console.log()
};

function isAdult(el) {
    return el >= 18;
};

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }else {
        return 'invalid age';
    }
};

var ages = arrayCalc(years, calculateAge);
console.log('ages ' + ages);
var isAdult = arrayCalc(ages, isAdult);
console.log('is an adult ' + isAdult);
var heartRate = arrayCalc(ages, maxHeartRate);
console.log('heart rate ' + heartRate);
*/

//////////////////////////////////////////////////////////////////////////////////
/*
//FIRST CLASS FUNCTIONS: FUNCTIONS RETURNING FUNCTIONS
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Joy');
teacherQuestion('Mike');
teacherQuestion('John');
//What subject do you teach, John?

var designerQuestion = interviewQuestion('designer');
designerQuestion('Bob');
// Bob can you please explain what UX design is?

interviewQuestion('designer')('James')
//James can you please explain what UX design is?

//else statment
var Question = interviewQuestion();
Question('John');
// Hello John, what do you do?

var Question = interviewQuestion();
Question();
// Hello undefined, what do you do?

//else statement
interviewQuestion()('Jim');
//Hello Jim, what do you do?

function gameYouLike(game) {
    if (game === 'Mario') {
        return function(name) {
            console.log('Hey ' + name + ', ' + game + ' sucks');
        }
    }else if (game === 'H1Z1') {
        return function(name) {
            console.log('Hey ' + name + '. ' + game + ' is awesome.');
        }
    }
}   

gameYouLike('Mario')('Bryant');
gameYouLike('H1Z1')('Davis');
var coolGame = gameYouLike('H1Z1');
coolGame('Joe');
coolGame('Ken');

function weatherTemp(temp) {
    if (temp === 'c') {
        return function(num) {
            console.log(num * 3 + ' ' + temp);
        } 
    } else if (temp === 'f') {
        return function(num) {
            console.log(num * 2 + ' ' + temp);
        }
    } else {
        return function(){
            console.log('the temperature is whack today');
        }
    }
}
weatherTemp('c')(5);
//15 c
weatherTemp('f')(5);
//10 c
weatherTemp()();
//the temperature is whack today
*/

//////////////////////////////////////////////////////////////////////
/*
//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

//NOT an IIFE
// function game() {
//     var score = Math.floor(Math.random() * 10) + 1;
//     console.log(score + ' is greater than or equal to 5 is ' + (score >= 5));
// }
// game();

//this is an IIFE 5/67
(function(goodluck) {
    var score = Math.floor(Math.random() * 10) + 1;
    console.log(score + ' is greater than or equal to 5 is ' + (score >= 5 - goodluck));
    //makes it 5-2 = 3 --------- so that means score has to be greater than or equal to 3 to be true
})(2);
*/

///////////////////////////////////////////////////////////////////////////////
//CLOSURES
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log('you are ' + age + '. ' + (retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1992);
retirementGermany(1992);
retirementIceland(1992);

retirement(66)(1992)

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('Davis');
interviewQuestion('teacher')('James');
//else
interviewQuestion()('Jim');
interviewQuestion()();

var teacherQuestion = interviewQuestion('designer');
teacherQuestion('Dave');