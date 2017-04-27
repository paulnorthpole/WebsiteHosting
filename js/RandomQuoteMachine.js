/**
 * Created by paulcharles on 4/7/17.
 */

$(document).ready(function() {
  getQuote();
  var tweetquote;

  function getQuote() {
    var url="https://api.chucknorris.io/jokes/random";
    $.getJSON(url, function(data){
      $(".quote").html(data.value);
      tweetquote = data.value;
    });
  }
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + tweetquote);
  });
  $("#newQuote").on("click", function(){
    getQuote();
  });

});