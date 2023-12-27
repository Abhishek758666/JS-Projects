let elem = document.querySelectorAll(".elem");
let img = document.querySelectorAll("img");

elem.forEach((val) => {
  val.addEventListener("mousemove", (dets) => {
    val.childNodes[3].style.left = dets.x + "px";
    val.childNodes[3].style.top = dets.y + "px";
  });
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 100;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
});
