(function() {
  'use strict';
  angular
    .module('app')
    .controller('CofradeModificar', CofradeModificar);

  function CofradeModificar(getCofradePrepService) {
    var vm = this;

    vm.cofrade = null;
    vm.cofrade = {datosFinancieros: {deuda: []}};

    vm.backState = backState;
    activate();

    function activate() {
      return getCofradePrepService.$promise.then(function(data){
        vm.cofrade = data;
        if (!vm.cofrade.datosFinancieros)
          vm.cofrade.datosFinancieros = {deuda: []};

      });
    }

    function backState(){
      window.history.back();
    }
  }

})();