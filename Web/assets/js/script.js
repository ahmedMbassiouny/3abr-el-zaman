$(document).ready(function () {
  $("#header").load("../../Layouts/header.html");
});

$(document).ready(function () {
  $("#footer").load("../../Layouts/footer.html");
});

$(document).ready(function () {
  $("#loader").load("../../Layouts/loader.html");
});

window.addEventListener("load", function () {
    document.querySelector("#loader").style.display = "none";
});