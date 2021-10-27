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

function Slide() {
  document.getElementById("switch1").style.top = "10%";
  trigger = 1;
}

function UnSlide() {
  document.getElementById("switch1").style.top = "-50%";
  trigger = 0;
}

document.getElementById("menu").addEventListener("click", toggleSwitch);
function toggleSwitch() {
  if (trigger == 0) {
    Slide();
  } else {
    UnSlide();
  }
}

const divs = document.querySelectorAll(".a");
divs.forEach((el) =>
  el.addEventListener("click", (event) => {
    UnSlide();
  })
);



//Form Submission Js Function
var form = document.getElementById("fs-frm");    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    // status.innerHTML = "Thanks for your submission!";
    window.alert("Thanks! Your Response has been Recorded");
    form.reset()
  }).catch(error => {
    // status.innerHTML = "Oops! There was a problem submitting your form"
     window.alert("Oops! There was a problem");
  });
}
form.addEventListener("submit", handleSubmit)