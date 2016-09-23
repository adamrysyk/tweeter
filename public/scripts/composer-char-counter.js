$(document).ready(function(){

  let $textarea = $(".new-tweet").find("textarea")
  let $counter = $(".new-tweet").find(".counter")

  $('textarea').on("input", function () {
    let tweetLength = $(this).val().length;
    $counter.text(140-tweetLength);
    if (tweetLength > 140) {
      $counter.addClass('red');
    } else {
      $counter.removeClass('red');
    }
  });
})