(function() {
  'use strict';

  angular
    .module('app')
    .controller('ListaDirectivos', ListaDirectivos);

  function ListaDirectivos($state) {
    var vm = this;
    
    vm.modifyDirectivo = modifyDirectivo;
    vm.goToDirectivo   = goToDirectivo;

    function goToDirectivo(id, event){
      $state.go('directivosDetalle', {directivoId: id});
    }

    function modifyDirectivo(id, event){
      event.stopPropagation();
      $state.go('directivosCambios', {directivoId: id});
    }

  }

})();