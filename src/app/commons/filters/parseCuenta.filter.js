(function() {
  'use strict';

  angular
    .module('app')
    .filter('parseIban', parseIban)
    .filter('parseCC', parseCC);

  function parseIban() {
    return function (iban) {
      iban = iban || '';
      var formattedIban = '';

      for (var i = 0; i < iban.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedIban += ' ';
        }
        formattedIban += iban[i];
      }
      return formattedIban;
    };
  }

  function parseCC() {
    return function (cc) {
      cc = cc || '';
      var formattedCC = '';

      formattedCC = cc.substr(0, 4) + '-';
      formattedCC += cc.substr(4, 4) + '-';
      formattedCC += cc.substr(8, 2) + '-';
      formattedCC += cc.substr(10, 10);

      return formattedCC;
    };
  }

})();