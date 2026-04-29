const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");
music.volume = 0.2;

let canClick = true;

/* 📱 CAMBIO DE PANTALLA */
function nextScreen() {

  if (!canClick) return;
  canClick = false;

  // 🎵 música solo con interacción real
  if (music && music.paused) {
    music.play().catch(() => {});
  }

  // 🔄 cambiar pantalla
  if (currentScreen < screens.length - 1) {

    screens[currentScreen].classList.remove("active");
    currentScreen++;
    screens[currentScreen].classList.add("active");

  }

  setTimeout(() => {
    canClick = true;
  }, 400);
}

/* 📱 TOQUE GLOBAL (ANDROID + IPHONE + PC) */
document.addEventListener("pointerdown", nextScreen);


/* 📅 CONTADOR DESDE 29 OCT 2025 */
const startDate = new Date("2025-10-29T00:00:00");

function updateCounter() {

  const now = new Date();

  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  // 📆 meses reales
  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  if (now.getDate() < startDate.getDate()) {
    months--;
  }

  const set = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  set("months", months);
  set("days", days);
  set("hours", hours);
  set("minutes", minutes);
  set("seconds", seconds);
}

setInterval(updateCounter, 1000);
updateCounter();
