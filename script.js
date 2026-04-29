
const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");
music.volume = 0.2;

/* =========================
   🔄 NAVEGACIÓN BASE
========================= */

function goToScreen(index) {

  if (index < 0 || index >= screens.length) return;

  screens[currentScreen].classList.remove("active");
  currentScreen = index;
  screens[currentScreen].classList.add("active");
}

function nextScreen() {
  goToScreen(currentScreen + 1);
}

function prevScreen(event) {
  if (event) event.stopPropagation();
  goToScreen(currentScreen - 1);
}

/* =========================
   📱 TOQUE (AVANZAR)
   (bloquea botón atrás)
========================= */

function handleInteraction(e) {

  // ❌ si toca el botón de atrás, no avanzar
  if (e.target.closest(".back-btn")) return;

  // 🎵 música solo en primera interacción
  if (music && music.paused) {
    music.play().catch(() => {});
  }

  nextScreen();
}

/* 📱 MÓVIL (iPhone + Android) */
document.addEventListener("touchstart", handleInteraction, { passive: true });

/* 💻 PC */
document.addEventListener("click", handleInteraction);

/* =========================
   📊 CONTADOR
========================= */

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
function generateCalendar() {

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const title = document.getElementById("calendar-title");
  const grid = document.getElementById("calendar-grid");

  if (!title || !grid) return;

  const months = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];

  title.textContent = `${months[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  grid.innerHTML = "";

  // espacios vacíos
  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div></div>`;
  }

  // días
  for (let d = 1; d <= daysInMonth; d++) {

    const isToday = d === now.getDate();

    grid.innerHTML += `
      <div class="day ${isToday ? "today" : ""}">
        ${d}
      </div>
    `;
  }
}

window.addEventListener("load", generateCalendar);
