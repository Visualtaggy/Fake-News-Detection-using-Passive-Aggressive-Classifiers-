//Selector
const burger = document.querySelector(".burger");
//Functions
function navToggle(e) {
  gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
  gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
  gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
  document.getElementById("logoImg").src = "/static/b-LOGO.png";
}

//Event Listener
burger.addEventListener("click", navToggle);
