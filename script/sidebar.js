$(document).ready(function () {
  $("#group").click(function () {
    $("#main-content").load("groups.html");
  });
  $("#home").click(function () {
    $("#main-content").load("main.html");
  });
  $("#history").click(function () {
    $("#main-content").load("history.html");
  });
  $("#avaiable").click(function () {
    $("#main-content").load("main.html");
  });
});
