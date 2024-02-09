// Write a function to truncate a string to a certain number of letters.
// truncateString("JavaScript", 7); // "Java..." 

//Method 1 - using slice
//Method 2 - using substring - str.substr(0,num-3)
function truncateString(str,num){
    if(str.length < num) return str;
    return str.slice(0,num-3)+"..."
}

console.log(truncateString("js is fun",10))