$(document).ready(function () {
  $("#sidebar-area").load("sidebar.html");
  $("#nav-area").load("navbar.html");
});

$(document).ready(function () {
  $("#product-item").on("change", function () {
    console.log($("#product-item").find("option:selected").data("price"));
  });
  $("#amount").on("change", function () {
    console.log($("#amount").val());
  });
});
