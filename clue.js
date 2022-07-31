const clues =  [
  { clue: " mouse ox tiger rabbit snake horse lamb monkey rooster dog"},
  { clue: " sheep antelope mouse horse deer monkey tiger wolf fox lion /"},
  { clue: "I Lost 2 animals / Symbol of Brave animal / Write animals name"},
  
];

const clue = document.querySelector("#secret span:first-child");
const randomclue = clues[Math.floor(Math.random() * clues.length)];

clue.innerText = randomclue.clue;




