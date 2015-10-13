(function() {
  'use strict';
  angular
    .module('app')
    .controller('CostaleroDetalle', CostaleroDetalle);

  function CostaleroDetalle($state, getCostaleroPrepService) {
    var vm = this;

    vm.modifyCostalero = modifyCostalero;
    
    activate();

    function activate() {
      return getCostaleroPrepService.$promise.then(function(data){
        vm.costalero = data;
      });
    }

    function modifyCostalero(id, event){
      $state.go('costalerosCambios', {costaleroId: id});
    }
  }

})();