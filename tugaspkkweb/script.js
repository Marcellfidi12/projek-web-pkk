// Toggle aktif
const navbarNav = document.querySelector(".navbar-nav");
// ketika pesan menu diklik
document.querySelector("#shopping-bag").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik luar sidebar buar menghilangkan nav
const pesan = document.querySelector("#shopping-bag");

document.addEventListener("click", function (e) {
  if (!pesan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
