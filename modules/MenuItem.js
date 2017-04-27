/**
 * Конструктор элемента меню
 * @param itemTitle {string}
 * @param targetHref {string}
 * @param menuItems {MenuItem[]=}
 * @returns {MenuItem}
 * @constructor
 */
function MenuItem(itemTitle, targetHref, menuItems) {
   /**
    * Название элемента меню
    * @type {string}
    */
   this.title = itemTitle;

   /**
    * Ссылка, на которую ведет элемент
    * @type {string}
    */
   this.targetHref = targetHref;

   /**
    * Подпункты меню
    * @type {MenuItem[]}
    */
   this.items = menuItems;
}

module.exports = MenuItem;