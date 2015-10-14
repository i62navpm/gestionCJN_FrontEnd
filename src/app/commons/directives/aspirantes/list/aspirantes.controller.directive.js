(function() {
  'use strict';

  angular
    .module('app')
    .controller('ListaAspirantes', ListaAspirantes);

  function ListaAspirantes($state) {
    var vm = this;
    
    vm.modifyAspirante = modifyAspirante;
    vm.goToAspirante   = goToAspirante;

    function goToAspirante(id, event){
      $state.go('aspirantesDetalle', {aspiranteId: id});
    }

    function modifyAspirante(id, event){
      event.stopPropagation();
      $state.go('aspirantesCambios', {aspiranteId: id});
    }

  }

})();