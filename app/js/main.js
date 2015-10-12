'use strict';

(function () {

  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=ansgsrrot3ur6xail1ow20oj&keywords=hufflepuff&includes=Images,Shop';

  var template = $('#itemTemplate').html();
  var renderTemplate = _.template(template);

  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then(function (response) {
    _.each(response.results, function (item) {
      var liveData = renderTemplate(item);
      $('.results-area').append(liveData);
    });
  });

  // With proxy
  // let etsyUrl = 'https://api.etsy.com/v2/listings/active?api_key=ansgsrrot3ur6xail1ow20oj&keywords=hufflepuff&includes=Images,Shop';

  // let url = 'http://jsonp.afeld.me/' + '?url=' + etsyUrl;

  // let template = $('#itemTemplate').html();
  // let renderTemplate = _.template(template);

  // $.getJSON(url)
  //   .then( function(response){
  //     let liveData = renderTemplate(response);
  //     console.log(liveData);
  //     $('#itemTemplate').append(liveData);
  //   });

  // make hover images appear & disappear

  $('.results-area').on('mouseenter', '.item-display', function () {
    $(this).find('.heart').toggleClass('show');
    $(this).find('.hamburger').toggleClass('show');
    console.log('maybe toggling?');
  });

  $('.results-area').on('mouseleave', '.item-display', function () {
    $(this).find('.heart').toggleClass('show');
    $(this).find('.hamburger').toggleClass('show');
    console.log('maybe toggling?');
  });
})();