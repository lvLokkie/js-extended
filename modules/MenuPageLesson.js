define(
    'modules/MenuPageLesson',
    [
        'jquery',
        'Menu',
        'MenuItem'
    ],

    //Меню. Урок 1.
    function ($, Menu, MenuItem) {
        'use strict';

        var menu = function () {
            //структура меню
            var items =
                    [
                        new MenuItem('1', '#'),
                        new MenuItem('2', '#', [
                            new MenuItem('2.1', '#'),
                            new MenuItem('2.2', '#', [
                                new MenuItem('2.2.1', '#')
                            ])
                        ]),
                        new MenuItem('3', '#', [
                            new MenuItem('3.1', '#'),
                            new MenuItem('3.2', '#')
                        ]),
                        new MenuItem('4', '#'),
                        new MenuItem('5', '#', [
                            new MenuItem('5.1', '#', [
                                new MenuItem('5.1.1', '#'),
                                new MenuItem('5.1.2', '#')
                            ]),
                            new MenuItem('5.2', '#')
                        ])
                    ],
                menu = new Menu(items);


            this.create = function () {
                var
                    $menu = menu.render(),
                    $menuContainer = $('.menuLesson');

                $menuContainer.append($menu);
            };


        };

        return menu;
    }
);


