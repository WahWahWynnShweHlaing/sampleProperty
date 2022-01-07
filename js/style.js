$(function () {
  $(document).on("click", ".menuBar", function () {
    $(".sp-gnav").slideToggle("slow");
    $(this).toggleClass("is-active");
    return false;
  });
});

$(function () {
  $(".dropdown-list").mouseover(function () {
    $(".dropdown-lists").slideToggle("slow");
    $(this).toggleClass("is-active");
    return false;
  });
});

/**
 * スティッキーヘッダー
 */
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
});

/**
 * スティッキーヘッダー for sp
 */
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".sp-head-right").addClass("sticky");
    } else {
      $(".sp-head-right").removeClass("sticky");
    }
  });
});
