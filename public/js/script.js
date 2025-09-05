document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const links = navLinks.querySelectorAll("a");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggleBtn.classList.toggle("open"); // toggle X effect
    toggleBtn.textContent = toggleBtn.classList.contains("open") ? "✖" : "☰";
  });

  // Close dropdown after clicking a link
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      toggleBtn.classList.remove("open");
      toggleBtn.textContent = "☰";
    });
  });
});