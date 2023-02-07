document.querySelector("pre").addEventListener("mouseover", function (e) {
  e.target.classList.add("style");
});

document.querySelector("pre").addEventListener("mouseout", function (e) {
  e.target.classList.remove("style");
});
