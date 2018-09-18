/*****************************************************************8
 * function constructor
 *  //INHERITANCE with PROTOTYPES
 */

/*
 var john = {
     name: 'john',
     yearOfBirth: 1990,
     job: 'teacher'
 }

 var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
 };

 //INHERITANCE with PROTOTYPES
//they are not directly in the object. We have access to these prototype functions because it is in the prototype property of the function constructor.

 //attaching methods to the constructor function's prototype property is common.
Person.prototype.calcAge = 
    function() {
        console.log(2016 - this.yearOfBirth);
    };
Person.prototype.hello = 
    function() {
        console.log(this.name + ' you suck');
    };

//you can also had properties intead of methods but it is not as common
Person.prototype.lastName = 'smith';

 //new - empty object is created, construction function(Person) is called with the arguments that we specified
 var john = new Person('john', 1990, 'teacher');
var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retired');

john.calcAge();
jane.calcAge();

console.log(Person.prototype);
console.log(mark)
mark.calcAge()
mark.hello();

//they all inherited the property lastname from the Person prototype
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

john.calcAge === Person.prototype.calcAge //true
john.lastName === Person.prototype.lastName //true
john.hasOwnProperty('job') //true
//lastName is part of the Person contructor property
john.hasOwnProperty('lastName') //false
//john is an instance of the Person constructor
john instanceof Person; //true
//Person is an instance of the Object constructor
Person instanceof Object // true
*/


/*************************************************************
 * Object.create
 */

 /*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: {value: 'jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/

/******************************************************************
 * Primitives vs objects
 */

 //variables containing primitives actually hold that data inside the variable itself
 //vairiables associated with objects do not actually contain the object. instead contains a reference to the place in memory where the object sits where the object is stored. It does not have a real copy of the object it just points to the object

 //primitives - numbers, strings, booleans, null, undefined
 //everythinh else are objects

 //PRIMITIVES
 // each variable holding primitives has their own copy of the data. They do not reference anything
 var a = 23;
 var b = a;
 a = 46;
 console.log(a); //46
 console.log(b); //23  

 //OBJECTS
 var obj1 = {
     name: 'john',
     age: 26
 }

 var obj2 = obj1;
 obj1.age = 30;
 console.log(obj1.age);
 console.log(obj2.age);

 //FUNCTIONS
 var age = 27;
 var poo = 22
 var obj = {
     name: 'jonas',
     city: 'lisbon'
 }


 function change(a, b) {

    a = 30;
    poo = 20
    b.city = 'san francisco';
 }
 change(age, obj);

//when you pass a primitive into a function a simple copy is created
 console.log(age); //27
 //when you pass an object it's not really the object that you pass but the reference of the object
 console.log(obj.city); //'san francisco'
 console.log(poo);
