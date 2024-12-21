$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $(".btntop").fadeIn(200);
  } else {
    $(".btntop").fadeOut(200);
  }
});
$(".btntop").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    40
  );
});
