const select = document.querySelector('#selection');
const p = document.querySelector('p');

select.addEventListener('change',function()
{
    p.style.fontSize=select.value;
})
