(function() {
  'use strict';

  angular
    .module('app')
    .controller('ListaCostaleros', ListaCostaleros);

  function ListaCostaleros($state) {
    var vm = this;
    
    vm.modifyCostalero = modifyCostalero;

    function modifyCostalero(id, event){
      event.stopPropagation();
      $state.go('costalerosCambios', {cofradeId: id});
    }

  }

})();