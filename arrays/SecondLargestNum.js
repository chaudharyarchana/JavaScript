//given an array of size n, find the second largest element in the array. distnct element from an array.
// [12,35,35,34,5] ======> 34

function SecondLargestNumber(arr,k){
   
   arr.sort((a,b)=> b-a)
   let largest = []
   
   for(let i=0;i<arr.length;){
       if(arr[i] !== arr[i+1] ) {
        largest.push(arr[i])
        i++;
    }
    else{
        largest.push(arr[i])
        i = i+2;
    }
   }

   return largest[k-1]
}

let arr =[12,35,35,34,5]


// console.log(SecondLargestNumber([12,35,35,34,5] , 4))

function sorted(arr){
    let largest=[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY]
     
    for(let i=1;i<arr.length;i++){
        if(largest[0] < arr[i]){
            largest[1] = largest[0]
            largest[0] = arr[i]
        } else if(arr[i] < largest[0] && arr[i] > largest[1] ){
            largest[1] = arr[i]
        }
    }

   
    return largest[1]
}

console.log(sorted(arr));