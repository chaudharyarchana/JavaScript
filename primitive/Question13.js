//Write a function which returns a list of elements which contains at least one character as digit

//// Example numInStr(['1a', 'a', '2b', 'b']));           // ['1a', '2b']  // ['test1']

function numInStr(arr){
    
  return  arr.filter((ele)=>{
        return /[0-9]/.test(ele)
    })
}

console.log(numInStr(['1a', 'a', '2b', 'b']))