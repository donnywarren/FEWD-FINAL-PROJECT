$(document).ready(function(){


  function fetchPopular() {
        $.ajax({
          url: 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=aMR4G9Ibl090nQ3jWfBsNSLnaLgN6dUz',
          success: function(data) {
            console.log(data);
            var description = data.results[19].title;
            var delivery = data.results[19].url;
            var third-item = data.results[19].
            $(".description").text(description);
            $(".delivery").text(delivery);
            // data.results.forEach(makeCard);
            // data.results.forEach(function(user) {
            // });
          }
        });
      }
      fetchPopular();


  // function fetchJoke() {
  //       $.ajax({
  //         url: 'https://sv443.net/jokeapi/v2/joke/any/?type=twopart',
  //         success: function(data) {
  //           console.log(data);
  //           var description = data.setup;
  //           var delivery = data.delivery;
  //           $(".description").text(description);
  //           $(".delivery").text(delivery);
  //           // data.results.forEach(makeCard);
  //           // data.results.forEach(function(user) {
  //           // });
  //         }
  //       });
  //     }
  //     fetchJoke();

});
