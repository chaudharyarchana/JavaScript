//WAP to reverse a String

let str = "hello"

//Method 1 -convert to array 

// let arr = str.split("").reverse().join("")

// console.log(arr);



//Method 2 - Iterate over string and store into other string in reverse order.
let reversedString = "";
for (let i = 0; i < str.length; i++) {
  reversedString = str.charAt(i) + reversedString;
}

console.log(reversedString);