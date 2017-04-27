(function () {
   var
      $sendAjaxButton = $('#send'),
      $errors = $('#errors');

   function handleQuery() {
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
   }

   $sendAjaxButton.on('click', function (ev) {
      handleQuery();
   });


})();



