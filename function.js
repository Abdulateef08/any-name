// functions 
// function is a block of code that performs and action and is 
// reuseable.

// types of function 
// function declaration 
// function expression 
// arrow function 

// 1, function declaration.
     function add(a, b){
        return(a+b)
     }

     const sum = add(2,4);
     console.log(sum)

     function multiply(a, b){
        return(a*b)
     }

     const product = multiply(3,5);
     console.log(product)

     function greet(name){
        console.log("Hello ${name} welcome to our app")
     }
     greet("Emmanuel")
     greet("John")

     const name = "kazeem"
     console.log("hello ${name}")

     function info(name, course){
        console.log("my name is ${name}, i am a ${course}, at New Horizon")
     }

     info("john", "frontend dev")

     // function Exprssion
     const add2 = function (a, b) {
        return a + b
     }
     const sum2 = add(1, 2)
     console.log(sum2)

     const multiply2 = function (a, b) {
        return a * b
     }
     const product2 = multiply(2, 3) 
     console.log(product2)

     const greet2 = function (name){
        console.log("Hello ${name}") 
     }
     greet2("Kazeem")

     const info2 = function (name, course, school){
        console.log("my name is ${name}, i am a ${course}, at ${school}")
     }
     info2("kazeem, frontend, New Horizon")

     // explain arrow function 

     const add3 = (a, b) => {
      return a + b 
     }
     const sum3 = add(2, 4)
     console.log(2, 4)

     const logIn = name =>console.log(`${name} is logged in`);
     logIn("seyi");