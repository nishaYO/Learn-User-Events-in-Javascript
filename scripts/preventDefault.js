// printing the success message when the form is submitted but if any of the name boxes not filled
// preventing the default behaviour and showing the error message
let first = document.getElementById("first");
let last = document.getElementById("last");
let submit = document.getElementById("submit");
let err = document.getElementById("message");

submit.addEventListener("click", (e) => {
  if (first.value === "" || last.value === "") {
    e.preventDefault();
    err.innerHTML = "Both the names should be filled.";
  }
});
