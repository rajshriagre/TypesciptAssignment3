//Create one typescrpt application which contains one class named as circle.
//circle class contains two charachteristics constructor which accept one value and assign it to Radius
//value of PI member is set to 3.14.In circle class we have to one methode as Area which will return area of circle.
//After designing the class create hardcoaded value .call the method area by using both th object.
class circle
{
    Radius:number;
    PI:number;

    constructor(Value:number)
    {
       this.Radius = Value;
       this.PI= 3.14;
    }

    Area():number
    {
        let Ans :number =0;
        Ans = this.PI*this.Radius*this.Radius;
        return Ans;
    }
} 

var RadValue1:number =10.2;
var RadValue2:number = 9.82; 
var Ret:number=0;

var Obj1=new circle(RadValue1);
Ret =Obj1.Area();
console.log("Area of Obj1 is: "+Ret);

var Obj2=new circle(RadValue2);
Ret =Obj2.Area();
console.log("Area of Obj2 is: "+Ret);

