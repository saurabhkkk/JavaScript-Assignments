const allp = document.getElementsByTagName('p');
const button = document.querySelector('button');
let counter = 0;
button.addEventListener('click',function()
{
    
    for(let p of allp)
    {
        counter++
        p.style.backgroundColor = "blue";
    }
})

