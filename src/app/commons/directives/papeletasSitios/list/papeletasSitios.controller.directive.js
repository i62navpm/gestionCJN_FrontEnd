(function() {
  'use strict';

  angular
    .module('app')
    .controller('ListaPapeletasSitios', ListaPapeletasSitios);

  function ListaPapeletasSitios($state, papeletasSitiosService) {
    var vm = this;
    
    vm.anio = null;

    vm.getAnio = getAnio;

    function getAnio(){
      papeletasSitiosService.papeletasSitiosRest().query({anio: vm.anio}, function(response){
        vm.papeletasSitio = response[0];
      });
    }

  }

})();