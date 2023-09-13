/* var declaration
   ---------------
The var statement declares a function-scoped or globally-scoped variable, 
optionally initializing it to a value. We can redeclare a var variable and also can be 
updated. var variables are initialized with undefined by js.
*/

var num = 2;
console.log(num);

var num = 5;
console.log(num);

num = 8;
console.log(num);

var username = "Prashant";
console.log(username);

var correct = true;
console.log(correct);
var password = null;
console.log(password);

var initialValue;
console.log(initialValue);

/* let declaration
   ---------------

The let declaration declares a block-scoped local variable, 
optionally initializing it to a value. We cannot redclare a let variable but we can
update it. et variales are not initialized with undefined.
*/

let number = 20;
{
    let number = 30;
    console.log(number);
}
console.log(number);

/* const declaration
   ---------------

Constants are block-scoped, much like variables declared using the let keyword. 
The value of a constant can’t be changed through reassignment 
(i.e. by using the assignment operator), and it can’t be redeclared 
(i.e. through a variable declaration).
*/

const admin = "Prashant";
console.log(admin);
// admin = "Divya"; Assignment to constant variable.