const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");
music.volume = 0.2;

let locked = false;

function nextScreen() {

  if (locked) return;
  locked = true;

  // 🎵 música solo con interacción real
  if (music && music.paused) {
    music.play().catch(() => {});
  }

  // 🔁 cambio de pantalla
  if (currentScreen < screens.length - 1) {

    screens[currentScreen].classList.remove("active");
    currentScreen++;
    screens[currentScreen].classList.add("active");

  }

  setTimeout(() => {
    locked = false;
  }, 500);
}

/* 📱 ANDROID + IPHONE + PC */
document.body.addEventListener("pointerdown", nextScreen);

/* 🛡️ extra fallback (por si pointerdown falla en algunos móviles viejos) */
document.body.addEventListener("touchstart", nextScreen);
document.body.addEventListener("click", nextScreen);


/* 📊 CONTADOR */
const startDate = new Date("2025-10-29T00:00:00");

function updateCounter() {

  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  set("months", months);
  set("days", days);
  set("hours", hours);
  set("minutes", minutes);
  set("seconds", seconds);
}

setInterval(updateCounter, 1000);
updateCounter();
