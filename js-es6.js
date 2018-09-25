/***********************************************************
 * es6
 */

/*
const years = [1990, 1965, 1982, 1937];

var ages5 = years.map(function(el) {
    return 2016 - el;
});
 const ages6 = years.map(el => 2016 - el);

 let ages6 = years.map((el, index) => `age element ${index + 1}: ${2016 - el}.`);

 console.log(ages6);

 ages6 = years.map((el, index) => {
     const now = new
     Date().getFullYear();
     const age = now - el;
     return `Age element ${index + 1}: ${age}.`
 });

 console.log(ages6);
 */


/***********************************************************
 * Arrow functions: /lexical this keyword
 */

 //es5 
 var box5 = {
     color: 'green',
     position: 1,
     clickMe: function() {

        var self = this;
         document.querySelector('.green').addEventListener('click', function() {
             var str = 'this is box number ' + self.position + ' and it is ' + self.color;
             alert(str);
         })
     }
 }
 box5.clickMe();