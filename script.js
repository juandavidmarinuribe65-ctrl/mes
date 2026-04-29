const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");
music.volume = 0.2;

function goNext(){

  if(music.paused){
    music.play().catch(()=>{});
  }

  if(currentScreen < screens.length - 1){
    screens[currentScreen].classList.remove("active");
    currentScreen++;
    screens[currentScreen].classList.add("active");
  }
}

function goBack(){
  if(currentScreen > 0){
    screens[currentScreen].classList.remove("active");
    currentScreen--;
    screens[currentScreen].classList.add("active");
  }
}

/* tocar pantalla */
document.addEventListener("click", goNext);
document.addEventListener("touchstart", goNext);

/* contador */
const startDate = new Date("2025-10-29T00:00:00");

function updateCounter(){

  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const months = Math.floor(days / 30);

  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCounter,1000);
updateCounter();
