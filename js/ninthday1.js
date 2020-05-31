const input = document.querySelector('#zero');
const red = document.querySelector('#first');
const green = document.querySelector('#second');
const blue = document.querySelector('#third');

const colorarray = document.querySelectorAll('input.first');

colorarray[0].addEventListener('click',function()
{
    console.log(colorarray[0].value);
    input.style.color = colorarray[0].value;
})

colorarray[1].addEventListener('click',function()
{
    console.log(colorarray[1].value);
    input.style.color = "green";
})

colorarray[2].addEventListener('click',function()
{
    console.log(colorarray[2].value);
    input.style.color = "blue";
})