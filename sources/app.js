//указываем пути к нашим модулям относительно директории с точкой входа
requirejs.config({
    paths: {
        'jquery': 'scripts/jquery-3.2.1.min',
        'Menu': 'scripts/menu/Menu',
        'MenuItem': 'scripts/menu/MenuItem'
    }
});


require(['jquery', 'Menu', 'MenuItem'], function ($, Menu, MenuItem) {

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
        menu = new Menu(items),
        $menu = menu.render(),
        $target = $('.container');

    $target.append($menu);

});
