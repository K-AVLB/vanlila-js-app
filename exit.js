const EXIT = document.querySelector("button.EXIT");
const list  = document.querySelector("div.list");
const intext = document.querySelector(".in");

function out () {
  if (intext.value === ""){
  list.classList.add("hidden");
  toDoList.classList.add("hidden");}
  
}

EXIT.addEventListener("click", out)