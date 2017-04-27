'use strict';

(function () {
   $('.tabs').on('click', function (event) {
      var $target = $(event.target);
      if ($target.hasClass('tab-link')) {
         $('.current').removeClass('current');
         $target.addClass('current');
         $($target.attr('data-tab')).addClass('current');
      }
   });
})();





