let dropdown = document.getElementById("dropdown-btn");
dropdown.addEventListener("click", () => {
  document.getElementById("dropdown-content").classList.toggle("hidden");
});

let mobile_dropdown = document.getElementById("mbl-dropdown-btn");

mobile_dropdown.addEventListener("click", () => {
  document.getElementById("mbl-dropdown-content").classList.toggle("hidden");
});
let mobile_dropdown2 = document.getElementById("mbl-dropdown-btn2");

mobile_dropdown2.addEventListener("click", () => {
  document.getElementById("mbl-dropdown-content").classList.toggle("hidden");
});
let footer = document.getElementById("footer-btn");

footer.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
