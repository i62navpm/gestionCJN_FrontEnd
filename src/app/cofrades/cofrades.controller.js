(function() {
  'use strict';
  angular
    .module('app')
    .controller('Cofrades', Cofrades);


  function Cofrades(cofradesPrepService) {
    var vm = this;
    
    vm.cofrades = null;
    vm.nextPage = null;

    activate();
    
    function activate() {
      return cofradesPrepService.$promise.then(function(data){
        vm.nextPage = data.next;
        vm.cofrades = data.results;
      });
    }

  }

})();