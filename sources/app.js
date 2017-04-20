//указываем пути к нашим модулям относительно директории с точкой входа
requirejs.config({
    paths: {
        jquery: 'scripts/jquery-3.2.1.min',
        Menu: 'scripts/menu/Menu',
        MenuItem: 'scripts/menu/MenuItem'
    }
});


require(['jquery', 'Menu', 'MenuItem'], function ($, Menu, MenuItem) {

    //Меню. Урок 1.
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

    //ajax-запрос. Урок 2.
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

    //Регулярные выражения. Урок 3.
    var
       colors = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2',
       floatPositive = [
         '0.1',
          '-0.1',
          '.f',
          '.1',
          '',
          '0'
       ],
       times = [
          '10:00',
          '10-00',
          '1:30',
          '12:01',
          ':',
          '-',
          '99:1'
       ],
       coordinates = [
          'A1',
          'Z2',
          'a1',
          'x',
          '1'
       ],
      phones = [
         '123-456-7890',
         '(123) 456-7890',
         '123 456 7890',
         '123.456.7890',
         '+91 (123) 456-7890',
         '12312312344',
         '+7(965)-123-45-67'
      ],
      emails = [
         'my@mail.ru',
         'low@.',
         '@s.re'
      ],
      passport = [
         '7108 241222',
         '1212 12121',
         '1212121212'
      ];

    console.log('colors');
    console.log(colors.match(/#[a-f0-9]{6}/gi));

    console.log('Positive float');
    floatPositive.forEach(function (item) {
        console.log(item, !!item.match(/^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/g));
    });

    console.log('Dates');
    times.forEach(function (item) {
        console.log(item, !!item.match(/^(2[0-3]|[01]?[0-9])[:|-]([0-5]?[0-9])$/));
    });

    console.log('Coordinates');
    coordinates.forEach(function (item) {
        console.log(item, !!item.match(/[a-h][1-8]/i));
    });

    console.log('Phones');
    phones.forEach(function (item) {
        console.log(item, !!item.match(/^(\+?\d)[\s.-]?\(\d{3}\)[\s.-]\d{3}[\s.-]\d{2}[\s.-]\d{2}$/));
    });

    console.log('Emails');
    emails.forEach(function (item) {
        console.log(item, !!item.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/));
    });

    console.log('Passport');
    passport.forEach(function (item) {
        console.log(item, !!item.match(/^(\d{4})[\s]?(\d{6})$/));
    });




});


