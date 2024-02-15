//Given an array , rotate the array to the right by k steps.
//[1,2,3,4,5,6,7] ====> [5,6,7,1,2,3,4]

function RotateK(arr,k){
   let first = arr.slice(0,k);
   let mid  = arr.slice(k,k+(arr.length - 2*k))
   let last = arr.slice(-k)

   return [...last,...first,...mid]
}

// console.log(RotateK([1,2,3,4,5,6,7],4))


function methodtwo(arr,k){
    for(let i=0;i<k;i++){
        for(let j=arr.length-1 ; j>0;j--){
              let temp = arr[j];
              arr[j] =arr[j-1];
              arr[j-1] =temp
        }

        
    }
    return arr;  //O(n*k)
}

// console.log(methodtwo([1,2,3,4,5,6,7],4))

function reverse(arr,start,end){
    //  let length = arr.length;
    //  let start = start;
    //  let end = end;
     while(start<=end){
        let temp = arr[start];
        arr[start++] = arr[end]
        arr[end--] = temp;
        // start++; end--;
     }
}

function rotates(arr,k){
    reverse(arr,0,arr.length-1)
    reverse(arr,0,k-1)
    reverse(arr,k,arr.length-1)
    return arr;
}

console.log(rotates([1,2,3,4,5,6,7],3))

