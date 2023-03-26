//Create one typescript application which contains one class named as cicleX which still inherite above cicle class .
//In CircleX class we have to wwrite one methods as circumference which will return cicrcumference of circle.
//After designing the class create two objects of that class by providing some hardcoded value.call circumfernece and Area methods by using both the object.

class Circle
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

class CircleX extends Circle
{
    constructor(Data:number)
    {
        super(Data);
    }

    Circumference():number
    {
        let Ans:number =0;
        Ans = 2*this.PI*this.Radius;
        return Ans;
    }
}

var iNo1:number =10.2;
var Ret :number =0;

var Obj1= new CircleX(iNo1);
Ret = Obj1.Circumference();
console.log("circumference is:"+Ret);

Ret = Obj1.Area();
console.log("Area is:"+Ret);

