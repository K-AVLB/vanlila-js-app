const weatherRing = document.querySelector(".weatherRing");
const now = document.querySelector("#weather");


function show(){
  dolist.classList.add("hidden");
  greeting.classList.add("hidden");
  clock.classList.add("hidden")
  now.classList.add("hidden");
  answer.classList.add("hidden");
  weatherRing.classList.remove("spin2");
  now.classList.remove("hidden");
  weatherRing.classList.add("spin");
  
}



function off (){
  now.classList.add("hidden");
  weatherRing.classList.remove("spin");
  weatherRing.classList.add("spin2");
}

weatherRing.addEventListener("click", show);
center.addEventListener("click", off);