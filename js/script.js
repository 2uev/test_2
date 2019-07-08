jQuery(function($) {
  $('#authors-list > li > h3').click(function() {

    if ($(this).parent().find('ul').length) {
      $(this).parent().find('ul').slideToggle(200); 

      return false;
    }

  });
});