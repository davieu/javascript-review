/*
/FUNCTION CONSTRUCTORS
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

/*
//OBJECT.CREATE
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.dateOfBirth);
    }
}
*/

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
console.log(heartRate);