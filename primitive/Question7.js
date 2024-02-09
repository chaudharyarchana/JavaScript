// Write a code to replace all the spaces of the string with underscores

let str = "hello i am archana";

//Method 1 - using replaceAll method
// str = str.replaceAll(" " , "_");

//Method 2 - use split and join 

// str = str.split(" ").join("_") 
// console.log(str)

//Method 3

let newstr = ""
for(let i=0 ; i<str.length ; i++){

     newstr = str[i] !== " " ? newstr + str[i] :   newstr + "_"
}

console.log(newstr)

