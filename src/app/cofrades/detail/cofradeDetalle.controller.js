(function() {
  'use strict';
  angular
    .module('app')
    .controller('CofradeDetalle', CofradeDetalle);

  function CofradeDetalle($state, $filter, getCofradePrepService, getMapsPrepService, numerosLoteriaPrepService) {
    var vm = this;

    vm.cofrade = null;
    vm.maps = null;
    
    vm.modifyCofrade = modifyCofrade;
    
    activate();

    function activate() {
      numerosLoteriaPrepService.$promise.then(function(data){
        vm.numerosLoteria = data[0];
      });

      return getCofradePrepService.$promise.then(function(data){
        vm.cofrade = data;
        if(vm.cofrade.datosFinancieros)
          if(vm.cofrade.datosFinancieros.cuenta){
            vm.iban = $filter('parseIban')(vm.cofrade.datosFinancieros.cuenta.iban);
            vm.cc = $filter('parseCC')(vm.cofrade.datosFinancieros.cuenta.cc);
          }
        vm.maps = getMapsPrepService;
      });
    }

    function modifyCofrade(id, event){
      $state.go('cofradesCambios', {cofradeId: id});
    }
  }

})();