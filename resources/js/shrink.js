$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $("header").addClass("shrink");
    $(".logo").addClass("logo__small");
    $(".phonenumber-fontsize").addClass("phonenumber__small");
    $(".cars-image").addClass("cars-image__small");
  }
  else
  {
    $("header").removeClass("shrink");
    $(".logo").removeClass("logo__small");
    $(".phonenumber-fontsize").removeClass("phonenumber__small");
    $(".cars-image").removeClass("cars-image__small");
  }
});
