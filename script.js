const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");
music.volume = 0.2;

let canClick = true;

function nextScreen() {

  if (!canClick) return;
  canClick = false;

  // 🎵 música solo con interacción real
  if (music && music.paused) {
    music.play().catch(() => {});
  }

  // 🔁 cambiar pantalla
  if (currentScreen < screens.length - 1) {
    screens[currentScreen].classList.remove("active");
    currentScreen++;
    screens[currentScreen].classList.add("active");
  }

  // ⏱️ pequeño delay para evitar doble toque en móvil
  setTimeout(() => {
    canClick = true;
  }, 400);
}

/* 📱 TOQUE UNIVERSAL (ANDROID + IPHONE + PC) */
document.addEventListener("pointerdown", nextScreen);
