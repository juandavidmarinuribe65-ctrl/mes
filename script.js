

// script.js

const screens =
document.querySelectorAll(".screen");

let currentScreen = 0;

const music =
document.getElementById("bgMusic");

music.volume = 0.2;

/* CAMBIAR */

function nextScreen(){

  if(music.paused){
    music.play();
  }

  if(currentScreen <
  screens.length - 1){

    screens[currentScreen]
    .classList.remove("active");

    currentScreen++;

    screens[currentScreen]
    .classList.add("active");
  }

}

/* MOVIL */

document.body.addEventListener(
"touchstart",
nextScreen
);

document.body.addEventListener(
"click",
nextScreen
);

/* CONTADOR */

const startDate =
new Date("2025-10-29T00:00:00");

function updateCounter(){

  const now = new Date();

  const diff = now - startDate;

  const seconds =
  Math.floor(diff / 1000);

  const minutes =
  Math.floor(diff / (1000*60));

  const hours =
  Math.floor(diff / (1000*60*60));

  const days =
  Math.floor(diff / (1000*60*60*24));

  const months =
  Math.floor(days / 30);

  document.getElementById(
  "months").innerText = months;

  document.getElementById(
  "days").innerText = days;

  document.getElementById(
  "hours").innerText = hours;

  document.getElementById(
  "minutes").innerText = minutes;

  document.getElementById(
  "seconds").innerText = seconds;
}

setInterval(updateCounter,1000);

updateCounter();
```

