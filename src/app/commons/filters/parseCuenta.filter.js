(function() {
  'use strict';

  angular
    .module('app')
    .filter('parseIban', parseIban)
    .filter('parseCC', parseCC)
    .filter('calcularIban', calcularIban)
    .filter('calcularCC', calcularCC);

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

  function calcularCC() {
    return function (iban) {
      iban = iban || '';
      return iban.substr(4, 20);
    };
  }

  function calcularIban() {
    return function (ccc) {
      var pais = "ES";
      var cifras = ccc + valorCifras(pais) + "00";
      var resto = modulo(cifras, 97);
      return pais + cerosIzquierda(98-resto, 2) + ccc;
    };

    function valorCifras(cifras) {
      var LETRAS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var items = [];
      for (var i=0; i<cifras.length; i++) {
        var posicion = LETRAS.indexOf(cifras[i]);
        items.push(posicion < 0? "-": posicion);
      }
      return items.join("");
    }

    function modulo(cifras, divisor) {
      var CUENTA = 10;
      var largo = cifras.length;
      var resto = 0;
      for (var i=0; i<largo; i+=CUENTA) {
        var dividendo = resto + "" + cifras.substr(i, CUENTA);
        resto = dividendo % divisor;
      }
      return resto;
    }

    function cerosIzquierda(cifras, largo) {
      cifras += '';
      while(cifras.length < largo) { cifras = '0'+cifras; }
      return cifras;
    }
  }

})();