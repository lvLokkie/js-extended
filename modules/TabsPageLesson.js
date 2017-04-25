define(
    'modules/TabsPageLesson',
    [
        'jquery'
    ],

    //Табы. Урок 4.
    function ($) {
        'use strict';

        var tabs = function () {

            var selectedClassName = 'current';

            this.init = function () {
                $('.tabs').on('click', function (event) {
                    var $target = $(event.target);
                    $('.current').removeClass(selectedClassName);
                    $target.addClass(selectedClassName);
                    $($target.attr('tab')).addClass(selectedClassName);
                });
            };

        };

        return tabs;
    }
);


