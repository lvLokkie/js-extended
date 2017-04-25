define(
    'modules/TabsPageLesson',
    [
        'jquery'
    ],

    //Табы. Урок 4.
    function ($) {
        'use strict';

        var tabs = function () {

            this.init = function () {
                $('.tabs').on('click', function (event) {
                        $('.current').removeClass('current');

                        var
                            $target = $(event.target),
                            contentId = '#tab-' +  $target.attr('id');
                        $target.addClass('current');
                        $(contentId).addClass('current');
                    });
            };

        };

        return tabs;
    }
);


