//sidebar router
$(document).ready(function () {
  $("#group").click(function () {
    $("#main-content").load("groups.html");
  });

  // $("#home").click(function () {
  //   $("#main-content").load("main.html");
  // });

  $("#history").click(function () {
    $("#main-content").load("history.html");
  });

  $("#avaiable").click(function () {
    $("#main-content").load("main.html");
  });
});

//sidebar drawer
$(document).ready(function () {
  $("#toggle").on("click", function () {
    $("#sidebar").toggleClass("hide");
  });
});

//sidebar active
$(document).ready(function () {
  $("#sidebar .nav .nav-link").on("click", function () {
    $("#sidebar .nav .nav-link").fadeOut(50).removeClass("active");
    console.log($("#sidebar .nav .nav-link"));
    $(this).fadeIn(600).addClass("active");
  });
});
