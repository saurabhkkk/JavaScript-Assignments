(function()
{
    console.log('SAURABH MISHRA');
})();

let x = (function(num)
{
    return num*num;
})(9);
console.log(x);


function sum()
{
    let sum =0;
    if(arguments.length > 0)
    {
        for(let i=0;i<arguments.length;i++)
    {
         sum = sum+arguments[i];
    }
    }
    return sum;
}

console.log(sum(2,4,5,6));