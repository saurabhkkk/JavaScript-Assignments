var result = 1;
 fact = (num)=>{
    if(num>0)
    {
        result = result*num;
        num--;
        fact(num);
    }
}
fact(7);
console.log("factorial of num is "+result);