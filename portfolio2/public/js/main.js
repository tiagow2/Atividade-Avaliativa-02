function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var header_height = $(".sample-header-section").outerHeight();
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
  }
  
  $(document).ready(function () {
    parallax_height();
    $(window).scroll(function () {
      parallax_height();
    });
    $(window).resize(function () {
      parallax_height();
    });
  });
  