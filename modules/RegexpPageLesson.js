define(
    'modules/RegexpPageLesson',

    //Регулярные выражения. Урок 3.
    function ($) {
        'use strict';

        var regexp = function () {
            this.printToConsole = function () {
                var
                    colors = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2',
                    floatPositive = [
                        '0.1',
                        '-0.1',
                        '.f',
                        '.1',
                        '',
                        '0'
                    ],
                    times = [
                        '10:00',
                        '10-00',
                        '1:30',
                        '12:01',
                        ':',
                        '-',
                        '99:1'
                    ],
                    coordinates = [
                        'A1',
                        'Z2',
                        'a1',
                        'x',
                        '1'
                    ],
                    phones = [
                        '123-456-7890',
                        '(123) 456-7890',
                        '123 456 7890',
                        '123.456.7890',
                        '+91 (123) 456-7890',
                        '12312312344',
                        '+7(965)-123-45-67'
                    ],
                    emails = [
                        'my@mail.ru',
                        'low@.',
                        '@s.re'
                    ],
                    passport = [
                        '7108 241222',
                        '1212 12121',
                        '1212121212'
                    ];

                console.log('colors');
                console.log(colors.match(/#[a-f0-9]{6}/gi));

                console.log('Positive float');
                floatPositive.forEach(function (item) {
                    console.log(item, !!item.match(/^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/g));
                });

                console.log('Dates');
                times.forEach(function (item) {
                    console.log(item, !!item.match(/^(2[0-3]|[01]?[0-9])[:|-]([0-5]?[0-9])$/));
                });

                console.log('Coordinates');
                coordinates.forEach(function (item) {
                    console.log(item, !!item.match(/[a-h][1-8]/i));
                });

                console.log('Phones');
                phones.forEach(function (item) {
                    console.log(item, !!item.match(/^(\+?\d)[\s.-]?\(\d{3}\)[\s.-]\d{3}[\s.-]\d{2}[\s.-]\d{2}$/));
                });

                console.log('Emails');
                emails.forEach(function (item) {
                    console.log(item, !!item.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/));
                });

                console.log('Passport');
                passport.forEach(function (item) {
                    console.log(item, !!item.match(/^(\d{4})[\s]?(\d{6})$/));
                });
            };
        };

        return regexp;
    }
);




