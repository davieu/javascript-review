/*
//PERSONAL NOTES
pareInt() converts string into number
// var answer = parseInt(prompt('Please select the right answer.'));
*/

////////////////////////////////////////////////////////

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

/*
//QUESTIONAIRE CHALLENGE
//THIS is my version of the challenge. a questionaire that moves to the next random question and keeps score.
var score = 0;
var initial = 0;

var question1 = {
    a: '\nWhat is the name of this course\'s teacher?',
    b: '1: John',
    c: '2: Michael',
    d: '3: Jonas'
}

var question2 = {
    a: '\nIs Javascript the coolest language in the world?',
    b: '1: Yes!',
    c: '2: No!' 
}

var question3 = {
    a: '\nWhat best describes coding?',
    b: '1: Boring',
    c: '2: Hard',
    d: '3: Fun',
    e: '4: Tedious'
}

var questions = [question1, question2, question3];

console.log('Welcome to the questionaire!')
//randomizes the questions in the array questions
var randomQuestion = questions[Math.floor(Math.random()*questions.length)];

// gets the answer for the random question
function questionAnswers(questionParam) {
    randomQuestion = questions[Math.floor(Math.random()*questions.length)];
    for (var questionDisplay in questionParam) {
        console.log(questionParam[questionDisplay]);
    }
    
    var val = prompt('Please select the correct answer (just type the number). Or type exit to quit');

    //did a slice method to just get the value of the first index in the string of answer
    if (questionParam === questions[0] && val === questions[0].d.slice(0, 1)) {
        console.log('\n' + val + ' is correct!\n');
        score++;
        console.log('Your current score is: ' + score + '\n-------------------------------------------');
        questionAnswers(randomQuestion);
    } else if (questionParam === questions[1] && val === questions[1].b.slice(0, 1)) {
        console.log('\n' + val + ' is correct!\n');
        score++;
        console.log('Your current score is: ' + score + '\n-------------------------------------------');
        questionAnswers(randomQuestion);
    } else if (questionParam === questions[2] && val === questions[2].d.slice(0, 1)) {
        console.log('\n' + val + ' is correct!\n' + '\n--------------------------------------------');
        score++;
        console.log('Your current score is: ' + score + '\n-------------------------------------------');
        questionAnswers(randomQuestion);
    } else if (val == null || val === 'exit' ) {
        console.log('\n-------------------------------------------' + '\nUser ended the prompt\nUser score: ' + score + '\n-------------------------------------------')
    } else {
        console.log('\n' + val + ' is incorrect!\n');
        score--;
        console.log('Your current score is: ' + score + '\n-------------------------------------------');
        questionAnswers(randomQuestion);
    }
}
questionAnswers(randomQuestion)
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LESSON version of the questionaire
//build function constructor

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each 
   question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input 
   the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is
   private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
   IIFE immidiately invoked function expression will do this
*/

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

//IIFE creates new scope wich defines all the code that is in the function. If someone else includes this code in their project
//and also has a variable called question, answer or n. Their code will not interfere with this code. No other code will overwrite this code
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' +  this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('\n' + ans + ' is correct answer')
            sc = callback(true);
        } else {
            console.log('\n' + ans + ' is incorrect. Please try again')
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('your current score is: ' + score);
        console.log('---------------------------------------------------------------')
    };

    
    var q1 = new Question('Is Javascript the coolest programming language in the world?', 
                         ['Yes', 'No'],
                         0);
    var q2 = new Question('What\'s the name of the course\'s teacher?',
                        ['John', 'Micheal', 'Jonas'],
                        2);
    var q3 = new Question('What best describes coding?', 
                        ['Boring', 'Hard', 'Fun', 'Tedious'],
                        2);
    
    var questions = [q1, q2, q3];        
    
    console.log('Game begins!\n\n')

    //CLOSURE FUNCTION - call score function
    function score() {
        var sc = 0;
        //once score is called it returns function below
        return function(correct) {
            if (correct) {
                sc++;
            } else {
                sc--
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion();
        
        //parseInt() convert string to a number. prompts always evaluate to string.
        var answer = prompt('\nPlease select the right answer.');
        if (answer === 'exit' || answer === null) {
            console.log('---------------------------------------------------------------\nYou quit!\n'+ 'Final score: ' + [keepScore() + 1] + '\n---------------------------------------------------------------');
        } else {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();





