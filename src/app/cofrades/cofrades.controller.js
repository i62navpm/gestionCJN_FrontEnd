(function() {
  'use strict';
  angular
    .module('app')
    .controller('Cofrades', Cofrades);


  function Cofrades(cofradesPrepService) {
    var vm = this;
    console.log(cofradesPrepService.query());
  }

})();