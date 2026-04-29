
const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

const music = document.getElementById("bgMusic");
if (music) music.volume = 0.2;

/* =========================
   🔄 NAVEGACIÓN
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
   📱 TOQUE / CLICK
========================= */

function handleInteraction(e) {

  if (e.target.closest(".back-btn")) return;

  if (music && music.paused) {
    music.play().catch(() => {});
  }

  nextScreen();
}

document.addEventListener("pointerdown", handleInteraction);

/* =========================
   📊 CONTADOR DESDE 29 OCT 2025
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

/* =========================
   📅 CALENDARIO NORMAL (MES ACTUAL)
========================= */

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

  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {

    const isToday = d === now.getDate();

    grid.innerHTML += `
      <div class="day ${isToday ? "today" : ""}">
        ${d}
      </div>
    `;
  }
}

/* =========================
   📅 CALENDARIO DE 6 MESES (TU HISTORIA)
========================= */

function generateMonths() {

  const months = [
    "Oct 2025",
    "Nov 2025",
    "Dic 2025",
    "Ene 2026",
    "Feb 2026",
    "Mar 2026",
    "Abr 2026"
  ];

  const grid = document.getElementById("calendar-grid");

  if (!grid) return;

  grid.innerHTML = "";

  months.forEach((m, i) => {

    let className = "month";

    if (i === 0) className += " start-month";
    if (i === months.length - 1) className += " end-month";

    grid.innerHTML += `<div class="${className}">${m}</div>`;
  });
}

/* =========================
   INICIO
========================= */

window.addEventListener("load", () => {
  updateCounter();
  generateCalendar();
  generateMonths();
});
