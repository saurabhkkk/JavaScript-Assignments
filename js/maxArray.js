let arr = [2,3,4,99,5,7,89,4,68,34];
function returnmax(arr)
{
    let max = arr.sort(function(a,b){return b-a});
    return max[0];
}
 let a= returnmax(arr);
 console.log(a);