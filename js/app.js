$(function () {

  var fixed = $("#fixed"),
    links = $("#links"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkscroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkscroll(scrollOffset + 10);
  });

  function checkscroll(scrollOffset) {
    if (scrollOffset >= introH) {
      fixed.addClass("menu--scroll");
      links.addClass("menu__none");
      $("#nav_toggle").removeClass("active");
    }
    else {
      fixed.removeClass("menu--scroll");
      

    }
  }

  //конец скрола для меню..............................

  //Плавный скрол к элементам..........................

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;

    $("#fixed a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  })
  //nav--toggle..............................
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#links").toggleClass("menu__none");
  })
});