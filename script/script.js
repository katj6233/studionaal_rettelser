const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Get the newsletter form element
var form = document.getElementById("newsletter-form");

// Toggle the form visibility when the user scrolls the page
window.onscroll = function () {
  console.log("working");
  if (window.pageYOffset > 200) {
    form.classList.add("show");
  } else {
    form.classList.remove("show");
  }
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const logoVideo = document.querySelector("#logo-video");

logoVideo.addEventListener("mouseenter", (event) => {
  event.target.play();
});

logoVideo.addEventListener("mouseleave", (event) => {
  event.target.pause();
  event.target.currentTime = 0;
});

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
