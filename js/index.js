gsap.registerPlugin(ScrollTrigger);

// SECTION 1° & 2°

window.addEventListener("scroll", () => {
  gsap.to(".arrow-movement", {
    opacity: 0,
  });
});

gsap.from(".first-text", {
  x: -80,
  duration: 3,
  opacity: 0,
});

gsap.from(".arrow-movement", {
  delay: 1,
  duration: 2,
  opacity: 0,
});

gsap.from(".second-text", {
  y: -50,
  duration: 2,
  opacity: 0,
  scrollTrigger: ".second-text",
});
gsap.from(".title-second-text", {
  y: 50,
  duration: 2,
  opacity: 0,
  scrollTrigger: ".second-text",
});

// 3° SECTION SLIDER
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// 4° SECTION PROMO YT CHANNEL
gsap.from(".youtube-title", {
  y: -30,
  duration: 2,
  opacity: 0,
  scrollTrigger: ".youtube-title",
});
gsap.from(".youtube-text", {
  x: -30,
  duration: 2,
  opacity: 0,
  scrollTrigger: ".youtube-text",
});
gsap.from(".youtube-img", {
  x: 30,
  duration: 2,
  opacity: 0,
  scrollTrigger: ".youtube-img",
});
