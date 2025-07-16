const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".menu a");

// Mode tema
function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggleBtn.textContent = theme === "dark" ? "🌞" : "🌜";
}

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  setTheme(current === "light" ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  setTheme(saved);

  // default tampil: about
  document.getElementById("about").classList.add("active");
  document.querySelector('.menu a[data-target="about"]').classList.add("active");
});

// Navigasi menu
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-target");

    sections.forEach(sec => {
      sec.classList.remove("active");
    });

    document.getElementById(target).classList.add("active");

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
