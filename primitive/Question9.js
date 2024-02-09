// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

function countX (str){
    if(!str.includes('X')) return -1

    let first = str.indexOf('X')
    let last = str.lastIndexOf('X')

   return first === last ? -1 : last-first
    
}

console.log(countX("F(X) !== G(X) !== F(X)"))
