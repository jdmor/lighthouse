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
          // For reference
          $('#lighthouseList').data('fromFlickr', data);

          $('#lighthouseList').empty();
          var images = data.items;
          images.forEach(function(image) {
            var title = $('<p>').text(image.title);
            var author = $('<p>').text(image.author);
            var link = $('<a>').attr('href', image.link).text('Source').addClass('btn btn-link');
            var details = $('<button>').addClass('btn btn-link btn-lg glyphicon glyphicon-info-sign');
            var wrapper = $('<div>').addClass('item-wrapper');
            $('<img>').attr('src', image.media.m).appendTo(wrapper);
            wrapper.append(details);
            wrapper.appendTo('#lighthouseList');
          });
        });
    }
  };


  $('#loadImages').on('click', function() {
    handlers.loadImages();
  });

});