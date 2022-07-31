const loginInput = document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "usename";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintgreeting(username){
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);// = h1 보이기 
}

function loginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); //h1만 나타내기 위해서 loginForm의 class에 다시 hidden을 추가. 
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintgreeting(username); //h1을 숨긴 hidden을 제거함으로 h1만 나타나게됨
  }

if(localStorage.getItem(USERNAME_KEY) === null )
  {loginForm.classList.remove(HIDDEN_CLASSNAME) // localstorage에 정보가 없는 경우 loginForm을 출력하여 사용자로 하여금 값을 작성하게 하여 저장한다.  
   loginForm.addEventListener("submit", loginSubmit)
    } 
  else {paintgreeting(savedUsername);} // 이미 localstorage에 정보가 담긴 경우 h1만 출력되게 하면 됨


function start(){
  if(localStorage.getItem(USERNAME_KEY) !== null ){
    weatherRing.classList.remove("noClick");
    dodoa.classList.remove("noClick");
    secretring.classList.remove("noClick");
    time.classList.remove("noClick");

  }
}
window.addEventListener("click", start);