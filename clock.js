const clock = document.querySelector("div#clock");
const time = document.querySelector(".time");
const center = document.querySelector(".circle_center")


function timeclock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);
  clock.innerText = `${hours}:${minutes} :${seconds}`;
}

timeclock();
setInterval(timeclock, 1000);

function show(){
  dolist.classList.add("hidden");
  now.classList.add("hidden");
  time.classList.remove("spin2");
clock.classList.remove("hidden");
time.classList.add("spin");
greeting.classList.add("hidden");

}



function off (){
  clock.classList.add("hidden");
  time.classList.remove("spin");
  time.classList.add("spin2");
  
}

time.addEventListener("click", show);

center.addEventListener("click", off);
