(function() {
  'use strict';
  angular
    .module('app')
    .controller('Cofrades', Cofrades);

  function Cofrades(cofradesPrepService, cofradesBajasPrepService) {
    var vm = this;
    
    vm.cofrades = null;
    vm.nextPage = null;
    vm.cofradesBajas = null;
    vm.nextPageBajas = null;
    vm.selectedTab = 0;
    activate();
    
    function activate() {
      cofradesPrepService.$promise.then(function(data){
        vm.nextPage = data.next;
        vm.cofrades = data.results;
      });

      return cofradesBajasPrepService.$promise.then(function(data){
        vm.nextPageBajas = data.next;
        vm.cofradesBajas = data.results;
      });
    }

  }

})();