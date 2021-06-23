 function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active"); 
 } 
 function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active"); 
 } 
 function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active"); 
 } 
 function togglePopup4(){
    document.getElementById("popup-4").classList.toggle("active"); 
 } 
 function togglePopup5(){
    document.getElementById("popup-5").classList.toggle("active"); 
 } 
 function togglePopupi(){
    document.getElementById("popup-i").classList.toggle("active"); 
 } 


  // Form validation code will come here.
  function validate(){  
   var name=document.getElementById('A');  
   var email=document.getElementById('B');
   var password=document.getElementById('C')  
   var location=document.getElementById('D')  
     
   if (name.value==""){  
     alert("Name can't be blank");  
     return false;
     
   }
   // if(email.value==''){
   //    alert('Input a valid email')
   // }
   if(password.value.length<6){  
     alert("Password must be at least 6 characters long.");  
     return false;  
     }
     if(location.value==''){
      alert('Input for location cannot be empty')
   }  
     alert('Thank you for booking with us!')
   }


   // function validate(){
   //    var name = parseInt(document.getElementById("A") .value);
   //    if(name==null){
   //        alert ("Name cannot be blank");
   //    }
   // }
      