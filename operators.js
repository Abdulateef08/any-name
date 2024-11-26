// operators in JS are special symbols dat performs operation 0n 1 or more flies i our js file system

// 1.Arithmethic operations
// Addition
let sum = 5 + 3;
console.log(sum)

// subtraction
let difference = 10 - sum;
console.log(difference)

// multiplication
let product = sum * difference;
console.log(product);

// division
let quotient = product / 4;
console.log(quotient);

// modulus
let remainder = quotient % 3;
console.log(remainder)


//2.Assignment operators:These operators assign value to variables
// assignment
let x = 5;
console

// addition assignment
let y = 5
y += 1;
console.log(y)

// subtraction assignment
let o = 10;
o -= y;
console.log(o)

// 3. comparison operators
// These operators compare values and return a boolean value

// Equal
console.log(5 == "5");

// strict Equal
console.log(5 === "5")

// not Equal
console.log(5 != "5")
let n = 3
let d = 2

console.log(n != d)

// strictly not Equal
console.log(5 !== "5")
let s = "Ademola"
let z = 10
console.log(s !== z)

// Greater than 
console.log(10 > 5)
let g = 12
let k = 10
let r = g + k
console.log(k > g)

// less than 
console.log(3 < 2)
let l = 12 
let i = 10 
let w = l - i 
console.log(l < w)

// greater than and equal
console.log(4 >= 5);
let u = 6
let v = 6
console.log(u >= v)

let f = h - 3

console.log( n >= f)


// using logical operators declare four variables that logs boolean
//console.
// using comments on the vs code editor explain the meaning and how 

// && operator
const hasDriverlicense = true;
const hasInsurance = true;

const carDrive = hasDriverlicense && hasInsurance;
console.log(carDrive);


const isAdult = true;
const isHungery = false;

const canEnter = isAdult && isHungery;
console.log(canEnter)

// || operator
const knowsHTML = false;
const knowsCSS = true;
const canDesignWebsite = knowsHTML || knowsCSS;
console.log(canDesignWebsite);


const isAdmin = false;
const isSuperUser = false;
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccesspage)