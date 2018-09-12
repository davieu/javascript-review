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
/*
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
*/

/////////////////////////////////////////////////////////////////////

/*
//BIND.CALL AND APPLY
//call method allows us to set the this variable in the first argument
//apply method accepts arguments as an array

//bind method similar to call method. You can set this variable explicitally. Bind doens't 
//immidiately call the function but instead it makes a copy of the function so we can store it.

//apply method wont work here, it's just a deomstration of how it looks like. 
//it doesnt expect to receive an array as an input therefore it won't work here

var john = {
    name: "John",
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + 
            ', I\'m a ' + this.job + ' and I\m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + 
            ' and I\m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

john.presentation('formal', 'morning');
john.presentation('friendly', 'afternoon');

var emily = {
    name: 'Emily',
    age: 35, 
    job: 'designer'
}

//set this variable in the first argument of the call which is emily. Borrowed the method from John.
john.presentation.call(emily, 'formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

//apply method wont work here, it's just a deomstration of how it looks like. 
//it doesnt expect to receive an array as an input therefore it won't work here
// john.presentation.apply(emily, ['friendly', 'afternoon']);

//bind
var johnFriendly = john.presentation.bind(john, 'friendly');
var johnAll = john.presentation.bind(john, 'friendly', 'night');
johnFriendly('morninggg')
johnAll()
var emilyFriendly = john.presentation.bind(emily, "friendly");
emilyFriendly('nightttt');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit
}


var ages = arrayCalc(years, calculateAge);
console.log(ages)
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);

var fullkiwi = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullkiwi)
*/

///////////////////////////////////////////////////////////////////////

// var val = prompt('Please select the correct answer (just type the number). Or type exit to quit').valueOf();
// console.log(val)

// var question1 = 'What is the name of this course\'s teacher?'

var question1 = {
    a: 'What is the name of this course\'s teacher?',
    b: '1: John',
    c: '2: Michael',
    d: '3: Jonas'
}

var question2 = {
    a: 'Is Javascript the coolest language in the world?',
    b: '1: Yes!',
    c: '2: No!' 
}

var question3 = {
    a: 'What best describes coding?',
    b: '1: Boring',
    c: '2: Hard',
    d: '3: Fun',
    e: '4: Tedious'
}



var questions = [question1, question2, question3]

//randomizes the questions in the array questions
var randomQuestion = questions[Math.floor(Math.random()*questions.length)];



// console.log(randomQuestion)
// console.log(questions[0])
// console.log(questions[0].d)

//gets the answer for the random question
function questionAnswers(questionParam) {
    for (var questionDisplay in questionParam) {
        console.log(questionParam[questionDisplay])
    }
    
    var val = prompt('Please select the correct answer (just type the number). Or type exit to quit').valueOf();

    //did a slice method to just get the value of the first index in the string of answer
    if (questionParam === questions[0] && val === questions[0].d.slice(0, 1)) {
        console.log('\n' + val + ' That is right!')
    } else if (questionParam === questions[1] && val === questions[1].b.slice(0, 1)) {
        console.log('\n' + val + ' That is right!')
    } else if (questionParam === questions[2] && val === questions[2].d.slice(0, 1)) {
        console.log('\n' + val + ' That is right!')
    } else {
        console.log('\n' + val + ' is incorrect!')
    }
}

questionAnswers(randomQuestion)



// console.log(question1[0]);
// console.log(question1[2]);

// function question() {


//     for (var questions in question1) {
//         console.log(question1[questions])
//     }
//     var val = prompt('Please select the correct answer (just type the number). Or type exit to quit').valueOf();
//     if (val === '1') {
//         console.log(val + ' is the right answer!')
//     } else if (val === null) {
//         console.log('Please put in an answer')
//     } else {
//         console.log('\n' + val + ' is incorrect!')
//     }
// }

// question()