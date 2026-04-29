const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");
let locked = false;

function nextScreen(){

  if(locked) return;
  locked = true;

  if(currentScreen < screens.length - 1){
    screens[currentScreen].classList.remove("active");
    currentScreen++;
    screens[currentScreen].classList.add("active");
  }

  if(music){
    music.play().catch(()=>{});
  }

  document.querySelectorAll("video").forEach(v=>{
    v.play().catch(()=>{});
  });

  setTimeout(()=> locked = false, 500);
}

/* UN SOLO EVENTO UNIVERSAL */
document.addEventListener("pointerdown", nextScreen);

/* CONTADOR */
const startDate = new Date("2025-10-29T00:00:00");

function updateCounter(){

  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
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
function unlockVideosMobile(){

  const videos = document.querySelectorAll("video");

  videos.forEach(v => {

    v.muted = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      const p = v.play();
      if(p !== undefined){
        p.catch(()=>{});
      }
    };

    tryPlay();

  });

}

/* IMPORTANTE: solo una vez, primer toque real */
document.addEventListener("touchstart", unlockVideosMobile, { once:true });
