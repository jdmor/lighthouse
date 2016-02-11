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
            var title = image.title;
            var author = $('<span>').text('By ' +  image.author);
            var options = {
              html: 'true'
            };

            var details = $('<a>')
              .addClass('btn btn-link btn-lg glyphicon glyphicon-info-sign')
              .attr('tabindex', '0')
              .attr('role', 'button')
              .data('toggle', 'popover')
              .data('trigger', 'focus')
              .attr('title', title)
              .data('content', author)
              .popover(options);

            var source = $('<a>')
              .attr('href', image.link)
              .addClass('btn btn-link glyphicon glyphicon-link');

            var wrapper = $('<div>').addClass('item-wrapper');
            $('<img>').attr('src', image.media.m).appendTo(wrapper);
            wrapper.append(details).append(source);
            wrapper.appendTo('#lighthouseList');


          });
        });
    }
  };


  $('#loadImages').on('click', function() {
    var btn = $(this)[0];
    btn.disabled = true;
    handlers.loadImages();
    btn.disabled = false;
  });

});