'use strict';
module.exports = Menu;

var
   MenuItem = require('./MenuItem');

/**
 * Конструктор меню
 * @param menuItems {MenuItem[]}
 * @returns {Menu} Menu
 */
function Menu(menuItems) {
   var self = this;

   /**
    * Уникальный идентификатор меню
    * @type {string}
    */
   this.id = 'id' + (new Date()).getTime();

   /**
    * Класс контейнера меню
    * @type {string}
    */
   this.containerClass = 'Menu';

   /**
    * Метод формирования элмента меню
    * @returns {jQuery}
    */
   this.render = function render() {
      var $menuContainer = $('<div>').addClass(self.containerClass).attr('id', self.id),
         $menu = $('<ul>').addClass('Menu');
      $menuContainer.append(self._getMenu($menu, menuItems));
      return $menuContainer;
   };

   /**
    * Рекурсивный обход структры меню
    * @param $menu {jQuery}
    * @param items { MenuItem[] }
    * @returns {jQuery}
    * @private
    */
   this._getMenu = function ($menu, items) {
      if (items && items.length) {
         items.forEach(function (item) {
            if (item.items && item.items.length) {
               var
                  $subMenu = self._getSubMenu(),
                  $currentLi = self._getItem($subMenu);

               $currentLi.prepend(self._getItemLink(item.targetHref, item.title));
               $currentLi.append(self._getMenu($subMenu, item.items));
               $menu.append($currentLi);

            } else {
               $menu.append(self._getItemLink(item.targetHref, item.title));
            }
         });
      }

      return $menu;
   };

   /**
    * Вернуть элемент неотсортированного списка
    * @returns {jQuery}
    * @private
    */
   this._getSubMenu = function () {
      return $('<ul>').addClass('menu__subMenu');
   };

   /**
    * Вернуть ссылку, завернутую в элемент списка
    * @param href Целевая ссылка
    * @param title Название элемента меню
    * @returns {jQuery}
    * @private
    */
   this._getItemLink = function (href, title) {
      return self._getItem(self._getLink(href, title));
   };

   /**
    * Получить элемент списка c содержимым
    * @param $content {jQuery | null}
    * @returns {jQuery}
    * @private
    */
   this._getItem = function ($content) {
      return $('<li>').addClass('menu__item').append($content);
   };

   /**
    * Получить ссылку
    * @param href {string}
    * @param title {string}
    * @returns {*|jQuery}
    * @private
    */
   this._getLink = function (href, title) {
      var $link = $('<a>');
      $link.attr('href', href).addClass('menuLink').html(title);
      return $link;
   };

}

(function () {
   var
      menu = new Menu(
         [
            new MenuItem('MainPage', 'index.html'),
            new MenuItem('RecursiveMenu', 'menu.html'),
            new MenuItem('Regexps', 'regexps.html'),
            new MenuItem('AjaxQuery', 'ajax.html'),
            new MenuItem('JQueryTabs', 'tabs.html'),
            new MenuItem('Canvas', 'canvas.html')
         ]
      ),
      $menu = menu.render();

   $('body').prepend($menu);
})();

