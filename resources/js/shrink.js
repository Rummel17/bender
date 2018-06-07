$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $("header").addClass("shrink");
    $(".logo").addClass("logo__small");
  }
  else
  {
    $("header").removeClass("shrink");
    $(".logo").removeClass("logo__small");

  }
});
