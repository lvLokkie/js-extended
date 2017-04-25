define(
    'modules/TabsPageLesson',
    [
        'jquery'
    ],

    //Табы. Урок 4.
    function ($) {
        'use strict';

        var tabs = function () {

            var $selected = $('.tab-link.current');

            this.init = function () {
                $('.tabs').on('click', function (event) {
                    if (!$selected.eq(this)) {
                        $('.current').removeClass('current');
                        $selected = this;
                        $selected.addClass('current');
                        $('#' + $selected.attr('id')).addClass('current');
                    }
                });
            };

        };

        return tabs;
    }
);


