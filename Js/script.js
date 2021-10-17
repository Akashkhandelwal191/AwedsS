var countDownDate = new Date("Nov 20, 2021 00:00:00").getTime();
var trigger = 0;
var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
 
  document.getElementById("Days").innerHTML = days;
  document.getElementById("Hours").innerHTML = hours;
  document.getElementById("Minutes").innerHTML = minutes;
  document.getElementById("Seconds").innerHTML = seconds;
  

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("launch").innerHTML = "EVENT OVER";
  }
}, 1000);





function Slide()
{ 

  
    document.getElementById('switch1').style.top = "8%";
   
  
  
  trigger = 1;
}

function UnSlide()
{ 

  
    document.getElementById('switch1').style.top = "-40%";
  
    
  
  
    trigger = 0;
}

document.getElementById('menu').addEventListener("click",toggleSwitch);


function toggleSwitch()
{ 
  
   if(trigger == 0)
   {
       Slide(); 
   }
   
   else
   {
     UnSlide();
   }
}