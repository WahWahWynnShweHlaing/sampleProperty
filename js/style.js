$(function () {
  $(document).on('click', '.menuBar', function () {
    $('.sp-gnav').slideToggle('slow');
    $(this).toggleClass('is-active');
    return false;
  });
});

$(function () {
  $(".dropdown-list").mouseover(function () {
    $('.dropdown-lists').slideToggle('slow');
    $(this).toggleClass('is-active');
    return false;
  });
});