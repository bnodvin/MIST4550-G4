let first_dropdown = document.getElementById("first-dropdown-btn");
first_dropdown.addEventListener("click", () => {
  document.getElementById("first-dropdown-content").classList.toggle("hidden");
});
let second_dropdown = document.getElementById("second-dropdown-btn");
second_dropdown.addEventListener("click", () => {
  document.getElementById("second-dropdown-content").classList.toggle("hidden");
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
