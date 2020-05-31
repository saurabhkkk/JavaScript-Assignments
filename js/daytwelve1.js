const password = document.querySelector('input');
const span = document.querySelector('span');
let match = /^[A-Za-z]\w{7,14}$/

password.addEventListener('change',function(e)
{
   if((e.target.value).match(match))
   {
       alert("password Entered correctely");
   }
   else{
       alert("Enter correct password");
   }
})