'use strict';

(function () {

   var
      Menu = require('./Menu'),
      MenuItem = require('./MenuItem'),
      menu = new Menu(
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
         ]
      ),
      $menu = menu.render();

   $('body').append($menu);
})();







