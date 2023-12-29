let cursor1 = document.querySelector(".cursor1");
let cursor2 = document.querySelector(".cursor2");

let secNav = document.querySelector(".sec-nav");
let profile = document.querySelector(".profile");
let footer = document.querySelector(".footer");

let ofse = profile.offsetTop;
let ofse2 = footer.offsetTop;
console.log(ofse2);

document.addEventListener("mousemove", (e) => {
  cursor1.style.top = `${e.y}px`;
  cursor2.style.top = `${e.y}px`;
  cursor1.style.left = `${e.x}px`;
  cursor2.style.left = `${e.x}px`;
});
window.addEventListener("scroll", () => {
  if ((window.pageYOffset > 200) & (window.pageYOffset < 2562)) {
    secNav.style.opacity = "1";
  } else {
    secNav.style.opacity = "0";
  }
});
