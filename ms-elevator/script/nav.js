open = false;
document.getElementById("manu-icon").addEventListener("click", function () {
  open = !open;
  const navLinks = document.getElementById("manu-list");
  if (open) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.getElementById("manu-list").style.display = "flex";
    open = true;
  } else {
    document.getElementById("manu-list").style.display = "none";
    open = false;
  }
});
