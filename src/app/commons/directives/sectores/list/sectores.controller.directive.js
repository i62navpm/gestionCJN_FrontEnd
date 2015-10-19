(function() {
  'use strict';

  angular
    .module('app')
    .controller('ListaSectores', ListaSectores);

  function ListaSectores($state) {
    var vm = this;
    
    vm.modifySector = modifySector;
    vm.modifyCalle  = modifyCalle;
    vm.showCalles   = showCalles;

    function showCalles(sector, event){
      sector = 'callesSector'+sector;
      angular.element(document.getElementById(sector)).toggleClass('ocultar');
    }

    function modifySector(id, event){
      event.stopPropagation();
      $state.go('sectoresCambios', {sectorId: id});
    }

    function modifyCalle(id, calle, event){
      event.stopPropagation();
      $state.go('sectoresCambios', {sectorId: id, calle: calle});
    }

  }

})();