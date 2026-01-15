
document.addEventListener("DOMContentLoaded", () => {
  const introOverlay = document.getElementById("intro-overlay");
  const enterBtn = document.getElementById("enter-site-btn");

  const hasVisited = localStorage.getItem("visited_minehoody");

  if (!hasVisited) {
    introOverlay.classList.add("active");
    introOverlay.classList.remove("hidden");
  }

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      introOverlay.classList.remove("active");
      setTimeout(() => {
        introOverlay.classList.add("hidden");
      }, 600);

      localStorage.setItem("visited_minehoody", "true");
    });
  }

  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
});

let timeLeft = 30; // 30 sekúnd

const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");

const timer = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;W

    if (timeLeft <= 0) {
        clearInterval(timer);
        countdownElement.style.display = "none";
        messageElement.style.display = "block";
    }
}, 1000);
