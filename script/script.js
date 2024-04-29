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
    let offset = sec.offsetTop - 520;
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

// Event listener for window scroll
window.addEventListener("scroll", () => {
  handleScrollAnimation();
  
  // Show or hide scroll-to-top button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


// Smooth scroll functionality
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  // Your form submission logic here (e.g., AJAX request or PHP code)
}
