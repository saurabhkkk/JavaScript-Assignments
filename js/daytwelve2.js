const checkboxes = document.querySelectorAll('.check');
const output = document.querySelector('input[type = "text"]');
let sum = 0;

for(let check of checkboxes)
{
    check.addEventListener('input',function()
    {
        if(check)
        {
            sum = sum + parseInt(check.value);
            output.value = sum;
        }
       
    })
}