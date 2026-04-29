const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");
music.volume = 0.2;

/* 📱 AVANZAR */
function nextScreen() {
  goToScreen(currentScreen + 1);
}

/* ⬅️ VOLVER */
function prevScreen(event) {
  if (event) event.stopPropagation();
  goToScreen(currentScreen - 1);
}

/* 🔄 CAMBIO SEGURO */
function goToScreen(index) {

  if (index < 0 || index >= screens.length) return;

  if (music && music.paused) {
    music.play().catch(() => {});
  }

  screens[currentScreen].classList.remove("active");
  currentScreen = index;
  screens[currentScreen].classList.add("active");
}

/* 📱 TOCAR = AVANZAR */
document.addEventListener("pointerdown", nextScreen);


/* 📊 CONTADOR DESDE 29 OCT 2025 */
const startDate = new Date("2025-10-29T00:00:00");

function updateCounter() {

  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

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
