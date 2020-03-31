window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var nav = $("#navbar");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.addClass("nav-shadow");
  } else {
    nav.removeClass("nav-shadow");
  }
}