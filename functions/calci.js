//  Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface


function Calci(num1,num2){
    let calciObj = {
        sum : function(){
            return num1+num2
        },
        substract : function(){
            return num1-num2;
        },
        multiply : function(){
            return num1*num2
        },
        divide : function(){
            return num1/num2
        }
    }
    return calciObj
}

let cal = Calci(2,3)

console.log(cal.sum())
