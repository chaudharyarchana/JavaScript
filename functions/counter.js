// Design a private counter function which exposes increment and retrive functionalities

var count = 0;

function Counter(){
    function increment(val=1){
       count = count + val
    }
    function retrive(){
       console.log(count);   
        
    }
    return{increment,retrive}
}

Counter().increment(5)
Counter().retrive()

Counter().increment()
Counter().retrive()
