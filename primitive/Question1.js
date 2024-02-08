// Swap two integers present in variables num1 and num2 without using temporary variable.

let num1 =6;
let num2 =9;

//method 1
num1 =num1+num2;
num2 =num1-num2;
num1 = num1 - num2;

console.log(num1,num2)

//method 2

let x= 2;
let y=7;

[x,y] = [y,x]

console.log(x,y)

