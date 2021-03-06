$(document).ready(function(){

// !!!!!!!!!!!!!!!!!!!!!!!!!   PAGE SELECTOR BUTTONS  !!!!!!!!!!!!!!!!!!!

  $(".news").on("click", categoryPageN);

  function categoryPageN() {
    $(".image-boredom-busters-small, .image-boredom-busters-large, .category-logo").addClass("animate-logo");
    setTimeout(openNews, 750);
  };

  function openNews() {
    window.location = "news.html";
  }



  $(".meme").on("click", categoryPageM);

  function categoryPageM() {
    $(".image-boredom-busters-small, .image-boredom-busters-large, .category-logo").addClass("animate-logo");
    setTimeout(openMeme, 750);
  };

  function openMeme() {
    window.location = "meme.html";
  }



  $(".trivia").on("click", categoryPageP);

  function categoryPageP() {
    $(".image-boredom-busters-small, .image-boredom-busters-large, .category-logo").addClass("animate-logo");
    setTimeout(openTrivia, 750);
  };

  function openTrivia() {
    window.location = "trivia.html";
  }



  $(".jokes").on("click", categoryPageJ);

  function categoryPageJ() {
    $(".image-boredom-busters-small, .image-boredom-busters-large, .category-logo").addClass("animate-logo");
    setTimeout(openJokes, 750);
  };

  function openJokes() {
    window.location = "joke.html";
  }



  $(".home").on("click", homePage);

  function homePage() {
    $(".image-boredom-busters-small, .image-boredom-busters-large, .category-logo").addClass("animate-logo");
    setTimeout(openHome, 750);
  };

  function openHome() {
    window.location = "index.html";
  }




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!  MEME  !!!!!!!!!!!!!!!!!!!!!!!!!!!!


$(".fetch-button-meme").on("click", fetchMeme);

  function fetchMeme() {
        $.ajax({
          cache: false,
          url: "https://meme-api.herokuapp.com/gimme/dankmemes",
          success: function(data) {
            var meme = data.url;
            var $memeCard = `<img src=${meme} class="meme-image" alt="meme">`;
            $(".meme-container").empty("meme-container");
            $(".meme-container").append($memeCard);
          }
        });
      }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!    TRIVIA  !!!!!!!!!!!!!!!!!!!!!!!!!!!!

$(".trivia-answer-front").on("click", addFlip);

function addFlip(){
  $(".trivia-answer-flipcard").addClass("flip");
}

$(".cubespinner").on("click", removeFlip);
$(".cubespinner div").on("click", getCategory);

function removeFlip() {
  $(".trivia-answer-flipcard").removeClass("flip");
}

function getCategory() {
  var $choice = $(this);
  var categoryName = $choice.html();

  fetchTrivia(categoryName);
}


function fetchTrivia(categoryName) {
      $.ajax({
        cache: false,
        url: `https://api.fungenerators.com/trivia/random/?category=${categoryName}&api_key=u9czR36lHWuhDuHeD3gDuQeF`,

        // categories: olympics, beer, sex, space, dogs, fashion

        success: function(data) {
          var question = data.contents[0].question;
          var answer = data.contents[0].answer;
          $(".trivia-question").text(question);
          $(".trivia-answer-back").text(answer);
        }
      });
    }




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!  JOKES  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


$(".fetch-button-jokes").on("click", fetchJoke);

function fetchJoke() {
      $.ajax({
        url: 'https://sv443.net/jokeapi/v2/joke/any',
        // url: 'https://sv443.net/jokeapi/v2/joke/any/?type=single',
        // url: 'https://sv443.net/jokeapi/v2/joke/any/?type=twopart',
        success: function(data) {
          var oneLiner = data.joke;
          var twoPart = data.setup;
          var delivery = data.delivery;
          $(".oneliner, .setup, .delivery").empty();
          $(".oneliner").text(oneLiner);
          $(".setup").text(twoPart);
          $(".delivery").text(delivery);
        }
      });
    };




      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!  NEWS  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      fetchPopularNews();

        function fetchPopularNews() {
          $.ajax({
            url: 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=aMR4G9Ibl090nQ3jWfBsNSLnaLgN6dUz',
            success: function(data) {
              data.results.forEach(function(news) {
                makeCard(news);
              });
              $('.news-carousel').slick();
            }
          });
        }


        function makeCard(news) {
          if (!news.media) return;

          var title = news.title;
          var summary = news.abstract;
          var photo = news.media[0]["media-metadata"][2].url;
          var webLink = news.url;

          var $articleTitle = $('<div class="article-title"></div>');
          var $summary = $('<div class="summary"></div>');
          var $photo = $('<img class="photo" src="" alt="">');
          var $webLink = $('<div class="web-link"></div>');
          var $anchorLink = $('<a href="" target="_blank"></a>')

          $articleTitle.text(title);
          $summary.text(summary);
          $photo.attr("src", photo);
          $anchorLink.attr("href", webLink);

          var $card = $('<div class="news-card"></div>');

          // put all the content inside of the link
          $anchorLink.append($articleTitle);
          $anchorLink.append($summary);
          $anchorLink.append($photo);
          $anchorLink.append($webLink);

          $card.append($anchorLink);


          $(".news-carousel").append($card);
        }








// onload clossing braces below
});
