(function() {
  'use strict';

  angular
    .module('app')
    .controller('ListaCostaleros', ListaCostaleros);

  function ListaCostaleros($state) {
    var vm = this;
    
    vm.modifyCostalero = modifyCostalero;
    vm.goToCostalero   = goToCostalero;

    function goToCostalero(id, event){
      $state.go('costalerosDetalle', {costaleroId: id});
    }

    function modifyCostalero(id, event){
      event.stopPropagation();
      $state.go('costalerosCambios', {costaleroId: id});
    }

  }

})();