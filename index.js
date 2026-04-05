var hamburger = document.querySelector('.custom-hamburger');
var navLinks = document.querySelector('.custom-nav-links');

hamburger.addEventListener('click', function () {
  if (navLinks.style.display != "flex")
  {
    navLinks.style.display = "flex";
  }
  else
  {
    navLinks.style.display = "none";
  }
});