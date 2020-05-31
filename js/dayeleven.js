const firstnum = document.querySelector('#first');
const secondnum = document.querySelector('#second');
const result = document.querySelector('#result');

const submit = document.querySelector('button');
const sign = document.querySelectorAll('.math');

submit.addEventListener('click',function()
{
    if(sign[0].checked === true)
    {
        result.value = parseInt(firstnum.value)+parseInt(secondnum.value);
    }
    if(sign[1].checked === true)
    {
        result.value = parseInt(firstnum.value)-parseInt(secondnum.value);
    }
})