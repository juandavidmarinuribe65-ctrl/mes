const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");

let locked = false; // evita doble disparo

function nextScreen(){

  if(locked) return;
  locked = true;

  if(currentScreen < screens.length - 1){
    screens[currentScreen].classList.remove("active");
    currentScreen++;
    screens[currentScreen].classList.add("active");
  }

  if(music && music.paused){
    music.play().catch(()=>{});
  }

  // desbloquea después de un pequeño delay
  setTimeout(()=> locked = false, 400);
}

/* SOLO UN EVENTO (IMPORTANTE) */
document.addEventListener("click", nextScreen);

/* CONTADOR */
const startDate = new Date("2025-10-29T00:00:00");

function updateCounter(){

  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000*60));
  const hours = Math.floor(diff / (1000*60*60));
  const days = Math.floor(diff / (1000*60*60*24));
  const months = Math.floor(days / 30);

  const set = (id,val)=>{
    const el = document.getElementById(id);
    if(el) el.textContent = val;
  };

  set("months", months);
  set("days", days);
  set("hours", hours);
  set("minutes", minutes);
  set("seconds", seconds);
}

setInterval(updateCounter,1000);
updateCounter();
