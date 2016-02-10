$(function() {

  $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
    tags: 'lighthouse',
    tagmode: 'any',
    format: 'json'
  })
    .done(function(data) {
      console.log(data);
    });

});