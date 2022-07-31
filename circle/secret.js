const secretring = document.querySelector("#secret");
const answer = document.querySelector(".quiz");
const useranswer = document.querySelector(".answer");
const timeclass = document.getElementById('time').className;
const secretRoom = document.getElementById("codeRoom");

function show(){
  dolist.classList.add("hidden");
  greeting.classList.add("hidden");
  answer.classList.remove("hidden");
  if (timeclass === "menu time noClick"){
    secretring.classList.remove("spin2");
    answer.classList.remove("hidden");
    secretring.classList.add("spin");
    greeting.classList.add("hidden");
  }

  
now.classList.add("hidden");
clock.classList.add("hidden");
clock.classList.remove("spin");
}



function off (){
  answer.classList.add("hidden");
  secretring.classList.remove("spin");
  secretring.classList.add("spin2");
  greeting.classList.remove("hidden");
}

function quiz (event) {
event.preventDefault();
  if (useranswer.value == "dragon,lion,pig")
{ secretRoom.classList.remove("hidden");

}
  else if (useranswer.value == "lion,dragon,pig"){
    secretRoom.classList.remove("hidden");

  }
  else if (useranswer.value == "dragon,pig,lion"){
    secretRoom.classList.remove("hidden");

  }
  else if (useranswer.value == "lion,pig,dragon"){
    secretRoom.classList.remove("hidden");

  }
  else if (useranswer.value == "pig,lion,dragon"){
    secretRoom.classList.remove("hidden");

  }
  else if (useranswer.value == "pig,dragon,lion"){
    secretRoom.classList.remove("hidden");

  }
  else alert("Wrong answer")
}

function ex (){
  alert("ex: frog,snail,cat / no spacebar / required ',' / press enter!");
}

useranswer.addEventListener("click", ex);

secretring.addEventListener("click", show);

center.addEventListener("click", off);

answer.addEventListener("submit", quiz);