const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();

// Define sections variable
const sections = document.querySelectorAll("section");

// Define the handleScrollAnimation function
function handleScrollAnimation() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 280;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show");
    } else {
      sec.classList.remove("show");
    }
  });
}

// Call the function initially to set the correct animation states
handleScrollAnimation();

// Call the function whenever the window is scrolled
window.onscroll = () => {
  handleScrollAnimation();
};
