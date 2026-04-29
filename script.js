const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");
music.volume = 0.2;

let canClick = true;

/* 🔁 CAMBIO DE PANTALLA */
function nextScreen() {
  goToScreen(currentScreen + 1);
}

function prevScreen() {
  goToScreen(currentScreen - 1);
}

function goToScreen(index) {

  if (!canClick) return;
  canClick = false;

  if (index < 0 || index >= screens.length) {
    canClick = true;
    return;
  }

  if (music && music.paused) {
    music.play().catch(() => {});
  }

  screens[currentScreen].classList.remove("active");
  currentScreen = index;
  screens[currentScreen].classList.add("active");

  setTimeout(() => {
    canClick = true;
  }, 400);
}

/* 📱 TOQUE (TAP = AVANZAR) */
document.addEventListener("pointerdown", nextScreen);

/* 📲 SWIPE DETECTION */
let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  let diff = startX - endX;

  // 👉 swipe izquierda (avanza)
  if (diff > 50) {
    nextScreen();
  }

  // 👈 swipe derecha (volver)
  if (diff < -50) {
    prevScreen();
  }
});
