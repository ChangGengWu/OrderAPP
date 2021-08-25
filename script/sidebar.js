$(document).ready(function () {
  $("#group").click(function () {
    $("#main").load("groups.html");
  });
  $("#home").click(function () {
    $("#main").load("main.html");
  });
  $("#history").click(function () {
    $("#main").load("history.html");
  });
});
