//Write a program to reverse a string by words. Also show the reverse of each words in place.

let sentence = "Hello my name is archana"

// Type 1 - Convert to array by space and then reverse the string - reverse the words

let arr = sentence.split(" ").reverse().join(" ")

// Type 2 -Reverse the words and also reverse the letters of the word

let brr = sentence.split(" ")
let reverse = []
  brr.forEach((ele)=>reverse.push(ele.split("").reverse().join("")))
console.log(reverse.join(" "))