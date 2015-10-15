(function() {
  'use strict';

  angular
    .module('app')
    .controller('ListaAutoridades', ListaAutoridades);

  function ListaAutoridades($state) {
    var vm = this;
    
    vm.modifyAutoridad = modifyAutoridad;
    vm.goToAutoridad   = goToAutoridad;

    function goToAutoridad(id, event){
      $state.go('autoridadesDetalle', {autoridadId: id});
    }

    function modifyAutoridad(id, event){
      event.stopPropagation();
      $state.go('autoridadesCambios', {autoridadId: id});
    }

  }

})();