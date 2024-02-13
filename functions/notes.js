// Write a function which returns another function and execute it after calling.

               // function outer(){
               //     console.log("i am outer function")
               //     return function(){
               //            console.log("i am inside of outer function")
               //     }
               // }
               // outer()()


// Write a function which executes another function received as an argument

               // function argumentFn(){
               //     console.log("hello i am passed as an argument")
               // }
               
               // function mainFn(fn){
               //     if(typeof fn === "function") fn()
                   
               //     console.log("hello i am main function")
               // }
               // mainFn(argumentFn)

               
// Create a function having no parameters declared and print all the arguments passed to it.

                // function noArgument(){
                //     for(value of arguments){
                //          console.log(value);   
                //     }
                // }
                
                // noArgument("hello", 12)

//  Write a function which executes only if the number of arguments match the number of parameters the function is expecting

                // function isCount(a,b){
                
                //     if(isCount.length === arguments.length){
                //         console.log("parameters = arguments");
                //     }else{
                //         throw new Error("not equal")
                //     }
                    
                // }
                
                // isCount(1)


//  Design a function which can receive a variable number of arguments in parameters and print them

                // function variableParams(...params){
                //     for(let value of params){
                //         console.log(value)
                //     }
                // }
                
                // variableParams("hello",12)

//  Show the most common ways of creating functions in JavaScript

                 // 1. using function keyword normal function 
                 // 2. creating arrow functions without function keyword
                 // 3. creating functions without name - anoymous function 
                 // 4. storing functions as a variable
                 // 5. passing function as an argument
                 // 6. returning function by a function
                 // 7. IFFE.

// Code the different forms of arrow functions for varying number of parameters

               // one parameter, single return statement 
                 // const noneFn = (num) => "hello"

// Write a program where hoisting can be visualized      

                //  console.log(var1)    
                //   printhello()
            
                //  var var1 ="hello"
            
                //   function printhello(){
                //     console.log("print")
                //   }
            
                //  console.log(var1)

// Code an Immediately Invoked Function Expression (IIFE) and show the different ways of executing it

                //   (function(){
                //     console.log("hello")
                //   }
                //   )()

//  Create an IIFE which receives arguments and executes

                // (function(var1){
                    // console.log(var1);
                // })("hello var1")

//  Show the usage of IIFE to set a value of a variable
                
                // var randomNumber = (function () {
                    // return Math.floor(Math.random() * 100);
                //   })();
                // 
                //  console.log( randomNumber)


//   Write a function which can return multiple values from a function.

                //same we can use objects also
                // function returnMultiple(){
                    // let a=5 ; let b=6;
                // 
                    // return[a,b]
                // }
                // let[x,y] = returnMultiple()
                // console.log(x,y)

//   Write a function which can set default values to the parameters of function when an argument is not passed. Also show how to use exisiting parameters to set the value of another parameter.

                 // function add(x=2,y=3){
                     // console.log(x+y)
                 // }
                 // add()

//  Show the usage of call, apply and bind with practical example      
           