define(
    'Menu',
    ['jquery'],
    function( $ ){
        function MenuItem(itemTitle, targetHref, menuItems) {
            return {
                title: itemTitle,
                href: targetHref,
                items: menuItems
            };
        }
    }
);


'use strict';

