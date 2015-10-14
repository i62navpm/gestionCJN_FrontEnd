(function() {
  'use strict';
  angular
    .module('app')
    .controller('AspiranteDetalle', AspiranteDetalle);

  function AspiranteDetalle($state, getAspirantePrepService) {
    var vm = this;

    vm.modifyAspirante = modifyAspirante;
    
    activate();

    function activate() {
      return getAspirantePrepService.$promise.then(function(data){
        vm.aspirante = data;
      });
    }

    function modifyAspirante(id, event){
      $state.go('aspirantesCambios', {aspiranteId: id});
    }
  }

})();