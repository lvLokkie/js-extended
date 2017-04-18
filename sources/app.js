//указываем пути к нашим модулям относительно директории с точкой входа
requirejs.config({
    paths: {
        jquery: 'scripts/jquery-3.2.1.min',
        Menu: 'scripts/menu/Menu',
        MenuItem: 'scripts/menu/MenuItem'
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
       $menuContainer = $('.menuContainer'),
       $sendAjaxButton = $('#send');

    $menuContainer.append($menu);

    $sendAjaxButton.on('click', function (ev) {
        $errors = $('#errors');
        $errors.html();

        $.ajax({
            method: 'POST',
            url: 'http://localhost/js-exended/validator.php',
            data: {
                username: $('#username').val(),
                password: $('#password').val(),
                birth: $('#birth').val(),
                email: $('#email').val(),
                gender: $('#gender').val(),
                credit_card: $('#creaditCard').val(),
                bio: $('#bio').val()
            },
            success: function (data, status, xhr) {
                data = JSON.parse(data);
                if (data.result) {
                    $errors.html('Successful');
                } else {
                    var errorsString = '';
                    for (var error in data.error) {
                        if (data.error.hasOwnProperty(error)) {
                            errorsString += data.error[error] + '</br>';
                        }
                    }

                    $errors.html(errorsString);
                }
            },

            error: function () {
                alert('При отправке запроса произошла ошибка!');
            }
        });
    });


});


