//create one typescript application which contains one class named as Arithematic .Arithematic class contains three charchateristics as Number1,Number2 .
//Create one parametrised constructor which accept two values  and asign it to number 1 and number2.
//In arithematic class we have to write four methods as Addition,substractor,multiplication and division.Addition method will add number1,number2 and return result.
//Substraction method will substract number1,number2 and return result.Multiplication method will multiply number1,number2 and return result.
//Division method will substract number1,number2 and return result.After designing the class create two objects of that class by providing some hardcoded value.
//call all the methods by using both the side.

class Arithematic
{
    No1:number;
    No2:number;

    constructor(Value1:number,Value2:number)
    {
        this.No1=Value1;
        this.No2=Value2;
    }

    Addition():number
    {
        return this.No1+this.No2;
    }

    Substraction():number 
    {
        return this.No1-this.No2;
    }

    Multiplication():number
    {
        return this.No1*this.No2 ;
    }
    
    Division():number
    {
        return this.No1/this.No2 ;
    }  
}

var iRet :number =0;
var Obj1 = new Arithematic(20,10);
iRet = Obj1.Addition();
console.log("Addition is:"+iRet);

iRet = Obj1.Substraction();
console.log("Substraction is:"+iRet);

iRet = Obj1.Multiplication();
console.log("Multiplication is:"+iRet);

iRet = Obj1.Division();
console.log(" Division is:"+iRet);
