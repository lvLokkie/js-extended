define('Menu', ['jquery', 'MenuItem'],
    function ($) {
        /**
         * Реализация класса меню
         * @param menuItems {MenuItem[]}
         * @returns {menu} menu
         */
        var menu = function (menuItems) {
            'use strict';
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
            this.containerClass = 'menu';

            /**
             * Метод формирования элмента меню
             * @returns {jQuery}
             */
            this.render = function render() {
                var $menuContainer = $('<div>').addClass(self.containerClass).attr('id', self.id),
                    $menu = $('<ul>').addClass('menu');
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

                            $currentLi.prepend(self._getItemLink(item.href, item.title));
                            $currentLi.append(self._getMenu($subMenu, item.items));
                            $menu.append($currentLi);

                        } else {
                            $menu.append(self._getItemLink(item.href, item.title));
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
             * @param title Название ссылки
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
                var $link = $('<a>').addClass('menuLink');
                $link.attr('href', href);
                $link.html(title);
                return $link;
            };

        };

    }
);



