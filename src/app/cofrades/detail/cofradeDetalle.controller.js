(function() {
  'use strict';
  angular
    .module('app')
    .controller('CofradeDetalle', CofradeDetalle);

  function CofradeDetalle($state, $filter, getCofradePrepService, getMapsPrepService) {
    var vm = this;

    vm.cofrade = null;
    vm.maps = null;
    
    vm.modifyCofrade = modifyCofrade;
    
    activate();

    function activate() {
      return getCofradePrepService.$promise.then(function(data){
        vm.cofrade = $filter('dateToString')(data);
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