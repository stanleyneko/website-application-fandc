//typing animation letter appears one by one//
document.addEventListener("DOMContentLoaded", () => {
  const letter = [];
  const element = document.getElementById("js-typing-animation");
  if (!element) return;

  const text = element.textContent; //get original text
  element.textContent = ""; //not display in default

  let letterIndex = 0;

  const typingEffect = () => {
    if (letterIndex < text.length) {
      element.textContent += text[letterIndex]; //add one by one
      letterIndex++;
      setTimeout(typingEffect, 100); //add letter in 100ms
    }
  };
  typingEffect();
});

// text appears when scroll //
const textAppear = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        translate: ["0 50px", 0],
      };
      entry.target.animate(keyframes, 500);
    }
  });
};

const boxObserver = new IntersectionObserver(textAppear);
document.querySelectorAll(".js-show-text").forEach((element) => {
  boxObserver.observe(element);
});
boxObserver.observe(document.querySelectorAll(".js-show-text"));

//vibrate text when scroll//
const message = document.getElementById("js-vibrate-text");
document.addEventListener("scroll", () => {
  if (!message) return;

  const randomX = Math.random() * 10;
  const randomY = Math.random() * 10;

  message.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
