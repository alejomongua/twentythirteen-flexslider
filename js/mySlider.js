(function($){
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(){
        $('.flexslider').find('.hidden').removeClass('hidden');
      }
    });
  });
})(jQuery);

