//Selector
const burger = document.querySelector(".burger");

//Functions
function navToggle(e) {
  gsap.to(".line1", 0.5, { rotate: "45", y: 5 });
  gsap.to(".line2", 0.5, { rotate: "-45", y: -5 });
}

//Event Listener
burger.addEventListener("click", navToggle);
