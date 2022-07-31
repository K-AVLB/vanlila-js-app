const API = "7557f5703b4c7d71575d72bceaf8e926";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function ok(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`;
 
  
  
  fetch(url)
   .then((response) => response.json())
   .then((data) => {
   city.innerText = data.name;
   weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  }

function nope(){
  alert("위치를 찾지 못했습니다.");
}
navigator.geolocation.getCurrentPosition(ok, nope);
