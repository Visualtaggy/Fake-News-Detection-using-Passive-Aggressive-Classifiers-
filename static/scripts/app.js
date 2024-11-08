//Selector
const burger = document.querySelector(".burger");
const mouse = document.querySelector(".cursor");
const mouseTxt = mouse.querySelector("span");
const exploreBtn = document.getElementById("custom-button");
//Functions
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.getElementById("logoImg").src = "/static/b-LOGO.png";
    document.getElementById("cursor").style.border = "2px solid black";
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.getElementById("logoImg").src = "/static/LOGO.png";
    document.getElementById("cursor").style.border = "2px solid white";
  }
}

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

function activeCursor(e) {
  const item = e.target;
  // console.log(item);

  if (
    item.id === "logoImg" ||
    item.classList.contains("burger") ||
    item.id === "line1" ||
    item.id === "line2"
  ) {
    mouse.classList.add("nav-active");
  } else {
    mouse.classList.remove("nav-active");
  }
  if (item.classList.contains("custom-button")) {
    mouse.classList.add("explore-active");
    mouseTxt.innerText = "Tap";
  } else {
    mouse.classList.remove("explore-active");
    mouseTxt.innerText = "";
  }
}

function loadNextPage(e) {
  location.href = "/prediction";
}

//Event Listener
burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
exploreBtn.addEventListener("click", loadNextPage);
