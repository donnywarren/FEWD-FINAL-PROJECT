$(document).ready(function(){



// PAGE SELECTOR BUTTONS
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





  $(".fetch-button").on("click",fetchPopular);

  // document.querySelector(".fetch-button").addEventListener("click",fetchPopular);

  //
  //
  // function fetchMeme() {
  //       $.ajax({
  //         cache: false,
  //         url: "https://meme-api.herokuapp.com/gimme/dankmemes",
  //         success: function(data) {
  //           console.log(data);
  //           var meme = data.url;
  //           var $memeCard = `<img src=${meme} class="meme" alt="meme">`;
  //           $(".image-container").append($memeCard);
  //         }
  //       });
  //     }
  //     fetchMeme();
  //



  // function fetchTrivia() {
  //       $.ajax({
  //         cache: false,
  //         url: "https://api.fungenerators.com/trivia/random/?category=space&api_key=u9czR36lHWuhDuHeD3gDuQeF",
  //         // categories: movie-quotes, beer, sex, space, dogs, fashion
  //         success: function(data) {
  //           console.log(data);
  //           var description = data.contents[0].question;
  //           var delivery = data.contents[0].answer;
  //           // var photo = data.results[19].media[0].media-metadata[2];
  //           //
  //           $(".description").text(description);
  //           $(".delivery").text(delivery);
  //           // $(".photo").attr("src", photo);
  //           // data.results.forEach(makeCard);
  //           // data.results.forEach(function(user) {
  //           // });
  //         }
  //       });
  //     }
  //     fetchTrivia();







  function fetchPopular() {
        $.ajax({
          url: 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=aMR4G9Ibl090nQ3jWfBsNSLnaLgN6dUz',
          success: function(data) {
            console.log(data);
            var description = data.results[7].title;
            var delivery = data.results[7].url;
            var photo = data.results[7].media[0]["media-metadata"][2].url;

            $(".description").text(description);
            $(".delivery").text(delivery);
            $(".photo").attr("src", photo);
            console.log(photo);
            // data.results.forEach(makeCard);
            // data.results.forEach(function(user) {
            // });
          }
        });
      }
      // fetchPopular();


  // function fetchJoke() {
  //       $.ajax({
  //         // url: 'https://sv443.net/jokeapi/v2/joke/any',
  //         // url: 'https://sv443.net/jokeapi/v2/joke/any/?type=single',
  //         url: 'https://sv443.net/jokeapi/v2/joke/any/?type=twopart',
  //         success: function(data) {
  //           console.log(data);
  //           // var oneLiner = data.joke;
  //           var twoPart = data.setup;
  //           var delivery = data.delivery;
  //           // $(".description").text(oneLiner);
  //           $(".description").text(twoPart);
  //           $(".delivery").text(delivery);
  //           // data.results.forEach(makeCard);
  //           // data.results.forEach(function(user) {
  //           // });
  //         }
  //       });
  //     }
  //     fetchJoke();

});
