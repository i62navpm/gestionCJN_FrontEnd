(function() {
  'use strict';
  angular
    .module('app')
    .controller('CostaleroDetalle', CostaleroDetalle);

  function CostaleroDetalle($state, $filter, getCostaleroPrepService, getMapsPrepService) {
    var vm = this;

    vm.costalero = null;
    vm.maps = null;
    
    vm.modifyCostalero = modifyCostalero;
    
    activate();

    function activate() {
      return getCostaleroPrepService.$promise.then(function(data){
        vm.costalero = data;
        if(vm.costalero.datosFinancieros)
          if(vm.costalero.datosFinancieros.cuenta){
            vm.iban = $filter('parseIban')(vm.costalero.datosFinancieros.cuenta.iban);
            vm.cc = $filter('parseCC')(vm.costalero.datosFinancieros.cuenta.cc);
          }
        vm.maps = getMapsPrepService;
      });
    }

    function modifyCostalero(id, event){
      $state.go('costalerosCambios', {costaleroId: id});
    }
  }

})();