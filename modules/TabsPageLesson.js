define(
    'modules/TabsPageLesson',
    [
        'jquery'
    ],

    //Табы. Урок 4.
    function ($) {
        'use strict';

        var tabs = function () {

            var
                selectedClassName = 'current',
                selectedIndex;

            this.init = function () {
                $('.tabs').on('click', function (event) {
                    var $target = $(event.target);
                    if (selectedIndex !== $target.index() && $target.hasClass('tab-link')) {
                        $('.current').removeClass(selectedClassName);
                        $target.addClass(selectedClassName);
                        $($target.attr('data-tab')).addClass(selectedClassName);
                        selectedIndex = $target.index();
                    }
                });
            };

        };

        return tabs;
    }
);


