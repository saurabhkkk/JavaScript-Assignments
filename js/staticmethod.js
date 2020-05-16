class Math
{
    constructor(number)
    {
        this.number = number;
        console.log(this.number);
    }
    static square(item)
    {
        return first.number*first.number;
    }
    static cube(item)
    {
        return first.number*first.number*first.number;
    }
   
    
}
var first = new Math(3);
console.log(Math.square(first));
console.log(Math.cube(first));

