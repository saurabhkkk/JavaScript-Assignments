
function check()
{
    let y = document.getElementById("userid").value;
   if(y.length <3 && y.length>15)
   {
       document.getElementById("1").innerHTML = "User name is not valid."
   } 
   
   let z  = document.getElementById("pass").value;
   if(z.length>8)
   {
       document.getElementById("2").innerHTML = "password is not of required lenght."
   }

   let x = document.getElementById("phone").value;
   if(x.length>10)
   {
       document.getElementById("3").innerHTML = "INVALID MOBILE NUMBER."
   }
   let a = document.getElementById("age").value;
   if(a<18 && a>100)
   {
       document.getElementById("4").innerHTML = "Invalid age";
   }
}