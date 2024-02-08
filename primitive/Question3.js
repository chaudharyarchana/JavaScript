// Create a function which returns a random number in the given range of values both inclusive.

function generateRandom(RangeStart,RangeEnd){
    
     return RangeStart + Math.random()*(RangeEnd-RangeStart)
}

console.log(generateRandom(2,6))