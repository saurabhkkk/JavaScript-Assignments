const input = document.querySelector('input');
const span = document.querySelector('span');

input.addEventListener('change',function(e)
{
    if(e.target.value === '')
    {
        alert("Please enter something");
    }
    span.innerHTML = e.target.value;
})