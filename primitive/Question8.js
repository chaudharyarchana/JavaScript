//Write a function which can convert the time input given in 12 hours format to 24 hours format

let time = "2:30PM"

function timeConvertor(time){
    let[hour,min] = time.split(":")
    let newtime
    if(min.includes("PM")){
        if(hour !== "12"){
            newtime = 12 + parseInt(hour)
            return String(newtime + ":"+min)
        }

    }
    else{
        if(hour === "12"){
            newtime =0
            return String(newtime + ":"+min)
            
        }
    }

   return time
}

console.log(timeConvertor("12:30AM"))