const dodoa = document.querySelector(".dodo");
const dolist  = document.querySelector("div.list");
const ul = document.querySelector("#todo-list");

function show(){
  greeting.classList.add("hidden");
  now.classList.add("hidden");
  dodoa.classList.remove("spin2");
  dolist.classList.remove("hidden");
  ul.classList.remove("hidden");
dodoa.classList.add("spin");

}




function off (){
  dolist.classList.add("hidden");
  dodoa.classList.remove("spin");
  dodoa.classList.add("spin2");
}

dodoa.addEventListener("click", show);
center.addEventListener("click", off);
