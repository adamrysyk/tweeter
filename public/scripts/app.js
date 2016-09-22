/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement(tweet) {

  var date = Math.floor((Date.now() - new Date(tweet.created_at))/86400000)
  var $header = $("<header>")
   .append($("<img>").attr('src', tweet.user.avatars.small))
   .append($("<h2>").text(tweet.user.name))
   .append($("<p>").text(tweet.user.handle))

  var $footer1 = $("<div>").addClass("icons")
    .append($("<i>").addClass("fa fa-flag").attr('aria-hidden', 'true'))
    .append($("<i>").addClass("fa fa-retweet").attr('aria-hidden', 'true'))
    .append($("<i>").addClass("fa fa-heart").attr('aria-hidden', 'true'))

  var $footer = $("<footer>")
   .append($("<div>").addClass("time-stamp").text(date + " days ago"))
   .append($("<div>").addClass("icons"))
   .append($footer1)

  var $post = $("<section>").addClass("tweet-container")
   .append($header)
   .append($("<article>").text(tweet.content.text))
   .append($footer)

  return $post
}


var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet[0]); // to see what it looks like
$( document ).ready(function() {
  $(".submit-tweet").on("submit", function(event) {
    event.preventDefault()
    var tweetObject = $(this).serialize()
    console.log(tweetObject);
    var counter = $("#tweet-input").val().length
    $(".tweet-error").text("").fadeIn(900)
    console.log(counter)
    if (counter > 140) {
        $(".tweet-error").text("*Your tweet must be under 140 characters.*").fadeOut(2000)
      return;
    }
    if (counter === 0) {
      $(".tweet-error").text("*You must tweet a tweet to tweet.*").fadeOut(2000)
      return;
    }
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: tweetObject,
      success: function(){
        $("#tweet-input").val("");
        $(".counter").text("140")
        loadTweets();
      }
    });
  });

  $(".compose").click(function() {
    console.log("SLIDDDINGGGGGG!!!")
    $(".compose").toggleClass("inverted")
    if ( $( ".new-tweet" ).is( ":hidden" ) ) {
      $( ".new-tweet" ).slideDown(350);
      $(".new-tweet #tweet-input").focus();
    } else {
      $( ".new-tweet" ).slideUp(350);
    }
  });

  function loadTweets(){
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (tweetData) {
        $( ".tweet-container" ).remove();
        renderTweets(tweetData);
      }
    })
  }
  loadTweets()

})

function renderTweets(tweets) {
  for(tweet of tweets){// loops through tweets
    var $tweet = createTweetElement(tweet);// calls createTweetElement for each tweet
    $('.container').append($tweet[0]); // takes return value and appends it to the tweets container
  }
}










