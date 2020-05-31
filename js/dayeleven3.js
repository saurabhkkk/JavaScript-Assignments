const list = document.querySelector('ol');
const button = document.querySelector('button');
const child = document.querySelector('li');

button.addEventListener('click',function()
{
    list.removeChild(child);
})
