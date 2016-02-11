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
          $('#lighthouseList').empty();
          var images = data.items;
          images.forEach(function(image) {
            $('<img>').attr('src', image.media.m).appendTo('#lighthouseList');
          });
        });
    }
  }


  $('#loadImages').on('click', function() {
    handlers.loadImages();
  });

});