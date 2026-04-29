const screens = document.querySelectorAll(".screen");
let currentScreen = 0;
let locked = false;

const music = document.getElementById("bgMusic");

/* =========================
   CAMBIO DE PANTALLA SEGURO
========================= */

function nextScreen(){

  if(locked) return;
  locked = true;

  const current = screens[currentScreen];
  const next = screens[currentScreen + 1];

  if(next){

    current.classList.remove("active");
    currentScreen++;
    screens[currentScreen].classList.add("active");

    if(music && music.paused){
      music.play().catch(()=>{});
    }

    // asegurar videos
    document.querySelectorAll("video").forEach(v=>{
      v.play().catch(()=>{});
    });

  }

  setTimeout(()=> locked = false, 400);
}

/* SOLO 1 EVENTO (IMPORTANTE) */
document.addEventListener("click", nextScreen);

/* =========================
   VIDEO FIX IOS
========================= */

document.addEventListener("click", () => {

  document.querySelectorAll("video").forEach(v=>{
    v.muted = true;
    v.playsInline = true;
    v.play().catch(()=>{});
  });

}, { once:true });

/* =========================
   CONTADOR
========================= */

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
