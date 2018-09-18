/*****************************************************************8
 * function constructor
 *  //INHERITANCE with PROTOTYPES
 */


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
john instanceof Person;

/*************************************************************
 * prototypechain in the console
 */

