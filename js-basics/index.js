//First JS comment
console.log('Hello World');

//Variables

let name = 'Tim';
console.log(name);


//Constants

const interestRate = 0.3;
console.log(interestRate);

//Primative Types
name = 'john'; //string literal
let age = 22; //Number Literal
let isApproved = true; //Boolean literal

let firstName = undefined;
let lastName = null;

//Dynamic Typing
//use type of variable 

//ctrl + l clears terminal 


//Objects

let person = {
    oName: 'Mosh',
    oAge: 30 
};// object literal

person.oName = 'phill';

console.log(person.oName);

person['oName'] = 'Mary';
console.log(person.oName);


//Arrays - are dynamic! types can vary!

let selectedColors = ['red', 'blue'];
selectedColors[2] = '1'
console.log(selectedColors[2]);

//can have methods
console.log(selectedColors.length);


//functions
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary');

//calculate value

function square(number){
    return number * number;
}

console.log(square(2));
 
