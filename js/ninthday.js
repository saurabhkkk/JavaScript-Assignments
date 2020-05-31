const h2 = document.querySelector('h2');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const button = document.querySelector('button');
button.addEventListener('click',function()
{
    h2.style.color = "blue";
})


button.addEventListener('click',function()
{
    h1.style.textAlign="right";
})

button.addEventListener('click',function()
{
    p.style.color = "blue";
    p.style.backgroundColor="white";
})