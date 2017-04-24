define(
    'modules/AjaxPageLesson',
    [
        'jquery'
    ],

    //ajax-запрос. Урок 2.
    function ($) {
        'use strict';

        var ajaxPageLesson = function () {
            var
                self = this,
                $sendAjaxButton = $('#send'),
                $errors = $('#errors');

            this.bind = function () {
                $sendAjaxButton.on('click', function (ev) {
                    $errors.html();
                    self._sendQuery();
                });

                this._sendQuery = function () {
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
                };

            };

        };

        return ajaxPageLesson;
    }
);


