'use strict';

$(function() {

  var handlers = {
    loadImages: function() {
      $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
        tags: 'lighthouse',
        tagmode: 'any',
        format: 'json'
      })
        .done(function(data) {
          $('.container').empty();
          var images = data.items;
          images.forEach(function(image) {
            console.log(image.media.m);
            $('<img>').attr('src', image.media.m).appendTo('.container');
          });
        });
    }
  }


  $('#loadImages').on('click', function() {
    handlers.loadImages();
  });

});