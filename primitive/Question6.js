//Write a program to reverse a given integer number

let num = 1234;

//Method 1 - convert number to string and then reverse it - Two ways 
// num = num.toString()
// 
// num= num.split("").reverse().join("")
// console.log(num)

//Method 2 - Take out the digits 

let reverse =0
while(num>0){
    reverse = (reverse * 10) + (num%10)
    num = parseInt(num/10)
}

console.log(reverse)

