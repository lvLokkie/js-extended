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
           new MenuItem('Main', 'https://lvlokkie.github.io/js-extended-cource/'),
           new MenuItem('Menu creation lesson', 'https://lvlokkie.github.io/js-extended-cource/lessons/menu.html'),
           new MenuItem('Ajax creation lesson', 'https://lvlokkie.github.io/js-extended-cource/lessons/ajax.html'),
           new MenuItem('Tabs creation lesson', 'https://lvlokkie.github.io/js-extended-cource/lessons/tabs.html')
         ],
            menu = new Menu(items),
            $menu = menu.render(),
            $menuTarget = $('.menuContainer'),
            regexp = new rgx();

        $menuTarget.append($menu);

        regexp.printToConsole();


});
