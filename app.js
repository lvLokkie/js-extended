//указываем пути к нашим модулям относительно директории с точкой входа
requirejs.config({
    paths: {
        jquery: 'modules/jquery',
        Menu: 'modules/Menu',
        MenuItem: 'modules/MenuItem'
    }
});


require(
    [
        'jquery',
        'Menu',
        'MenuItem',
        'modules/RegexpPageLesson'
    ],
    function ($, Menu, MenuItem, rgx) {
        var items = [
           new MenuItem('Main', '/js-1/index.html'),
           new MenuItem('Menu creation lesson', '/js-1/lessons/menu.html'),
           new MenuItem('Ajax creation lesson', '/js-1/lessons/ajax.html'),
           new MenuItem('Tabs creation lesson', '/js-1/lessons/tabs.html')
         ],
            menu = new Menu(items),
            $menu = menu.render(),
            $menuTarget = $('.menuContainer'),
            regexp = new rgx();

        $menuTarget.append($menu);

        regexp.printToConsole();

    //     $formTarget = $('#form'),
    //     $sendButton = $('#send'),
    //
    //     constraints = {
    //         username: {
    //             presence: true,
    //             length: {
    //                 minimum: 6,
    //                 maximum: 100
    //             },
    //             format: {
    //                 pattern: '[a-z0-9]+',
    //                 flags: 'i',
    //                 message: 'can only contain a-z and 0-9'
    //             }
    //         },
    //         password: {
    //             presence: true,
    //             length: {
    //                 minimum: 6,
    //                 maximum: 100
    //             }
    //         },
    //         email: {
    //             presence: true,
    //             email: true
    //         },
    //         gender: {
    //             presence: true,
    //             inclusion: {
    //                 within: ['f'],
    //                 message: '^Sorry, this service is for man only'
    //             }
    //         },
    //         credit_card: {
    //             presence: true,
    //             format: {
    //                 pattern: /^(34|37|4|5[1-5]).*$/,
    //                 message: function (value, attribute, validatorOptions, attributes, globalOptions) {
    //                     return validate.format('^%{num} is not a valid credit card number', {
    //                         num: value
    //                     });
    //                 }
    //             },
    //             length: function (value, attributes, attributeName, options, constraints) {
    //                 if (value) {
    //                     // Amex
    //                     if ((/^(34|37).*$/).test(value)) return { is: 15 };
    //
    //                     // Visa, Mastercard
    //                     if ((/^(4|5[1-5]).*$/).test(value)) return { is: 16 };
    //                 }
    //
    //                 // Unknown card, don't validate length
    //                 return false;
    //             }
    //         },
    //         bio: {
    //             presence: true
    //         }
    //     };
    //
    // $menuTarget.append($menu);
    //
    // validate($formTarget, constraints);
    //
    // $sendButton.on('click', function (ev) {
    //     var errors = validate($formTarget, constraints);
    //     console.log(errors);
    // });


});
