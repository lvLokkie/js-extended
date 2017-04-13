//указываем пути к нашим модулям относительно директории с точкой входа
requirejs.config({
    paths: {
        'jquery': 'scripts/jquery-3.2.1.min',
        'Menu': 'scripts/menu/Menu',
        'MenuItem': 'scripts/menu/MenuItem'
    }
});


require(['jquery', 'Menu'], function ($, Menu) {
    var items =
        [
            {
                title: '1',
                href: '#'
            },
            {
                title: '2',
                href: '#'
            },
            {
                title: '3',
                href: '#',
                items: [
                    {
                        title: '3.1',
                        href: '#'
                    },
                    {
                        title: '3.2',
                        href: '#'
                    },
                    {
                        title: '3.3',
                        href: '#',
                        items: [
                            {
                                title: '3.3.1',
                                href: '#'
                            },
                            {
                                title: '3.3.2',
                                href: '#',
                                items: [
                                    {
                                        title: '3.3.2.1',
                                        href: '#'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '3.4',
                        href: '#'
                    }
                ]
            }
        ],
        menu = new Menu(items),
        $menu = menu.render(),
        $target = $('.container');

    $target.append($menu);

});
