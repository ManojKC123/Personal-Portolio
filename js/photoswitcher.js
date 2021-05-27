var blue = document.querySelector("#blue");
var bluevoilet = document.querySelector("#blueviolet");
var red = document.querySelector("#red");
var purple = document.querySelector("#purple");
var green = document.querySelector("#green");
var yellowgreen = document.querySelector("#yellowgreen");
var orange = document.querySelector("#orange");
var yellow = document.querySelector("#yellow");
var magneta = document.querySelector("#magneta");
var goldenrod = document.querySelector("#goldenrod");

const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2500);
});

blue.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/blue.jpg)";
});

blueviolet.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/bluevoilet.jpg)";
});

red.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/red.jpg)";
});
purple.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/purple.jpg)";
});

green.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/green.jpg)";
});
yellowgreen.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/yellowgreen.jpg)";
});
orange.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/orange.jpg)";
});
yellow.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/yellow.jpg)";
});
magneta.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/magneta.jpg)";
});
goldenrod.addEventListener("click", () => {
  document.querySelector(".home .bg").style.backgroundImage =
    "url(img/goldenrod.jpg)";
});
