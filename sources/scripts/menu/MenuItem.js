define(
    'MenuItem',
    function () {
        'use strict';
        /**
         * Элемент меню
         * @param itemTitle {string}
         * @param targetHref {string}
         * @param menuItems {MenuItem[]}
         * @returns {MenuItem}
         * @constructor
         */
        function MenuItem(itemTitle, targetHref, menuItems) {
            return {
                title: itemTitle,
                href: targetHref,
                items: menuItems
            };
        }
    }
);


