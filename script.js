const screens =
document.querySelectorAll(".screen");

let currentScreen = 0;

const music =
document.getElementById("bgMusic");

music.volume = 0.25;

document.body.addEventListener(
"click",
() => {

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

});


// CONTADOR

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


// GALERÍA

const memories =
document.querySelectorAll(".memory");

let currentMemory = 0;

setInterval(() => {

  memories[currentMemory]
  .classList.remove("active-memory");

  if(memories[currentMemory]
  .tagName === "VIDEO"){

    memories[currentMemory]
    .pause();

    music.volume = 0.25;
  }

  currentMemory++;

  if(currentMemory >=
  memories.length){

    currentMemory = 0;
  }

  memories[currentMemory]
  .classList.add("active-memory");

  if(memories[currentMemory]
  .tagName === "VIDEO"){

    music.volume = 0.1;

    memories[currentMemory]
    .play();
  }

},7000);
