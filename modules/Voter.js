/**
 * @typedef {Object} VoterOptions
 * @property {$} element
 */


/**
 * Создание голосовалки
 * @param voterOptions {VoterOptions}
 * @constructor
 */
function Voter(voterOptions) {
   if (voterOptions.element === void 0) {
      throw new Error('Can`t find voter container at options.element!');
   }

   var
      self = this,
      _value = 0,
      _$container = voterOptions.element,
      _$up = $('<button>').attr('id', 'vote-up').html('+'),
      _$numbers = $('<span>').attr('id', 'vote-value').html(_value),
      _$down = $('<button>').attr('id', 'vote-down').html('-');

   this._setValue = function (value) {
      _value = value;
      _$numbers.html(_value);
   };

   this._init = function () {
      _$up.on('click', function () {
         self._setValue(_value + 1);
      });

      _$down.on('click', function () {
         self._setValue(_value - 1);
      });

      _$container.append([_$up, _$numbers, _$down]);
   };

   this.setVote = function (value) {
      self._setValue(value);
   };

   this._init();
}

module.exports = Voter;