// WhatsApp number in international format, without +, spaces, or dashes.
const WHATSAPP_NUMBER = "2347032091735";
const DEFAULT_MESSAGE = "Hello Peter, I visited your portfolio and would love to connect about your humanitarian work.";
document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const configured = /^\d{10,15}$/.test(WHATSAPP_NUMBER) && !WHATSAPP_NUMBER.includes("X");
  if (configured) {
    link.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(DEFAULT_MESSAGE);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "contact.html";
  }
});
document.querySelectorAll(".year").forEach((el) => { el.textContent = new Date().getFullYear(); });
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    toggle.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    toggle.textContent = "☰";
  }));
}