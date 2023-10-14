function cursor(e) {
  let mouse = document.querySelector(".cursor");
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursor);
