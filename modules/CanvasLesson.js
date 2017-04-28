var Clock = require('./Clock.js');
var Voter = require('./Voter.js');

(function () {

   var
      clock = new Clock($('#clockContainer')),
      voter = new Voter({ element: $('#voterContainer') });

   voter.setVote(20);

})();
