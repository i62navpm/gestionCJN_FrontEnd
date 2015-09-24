(function() {
  'use strict';
  angular
    .module('app')
    .controller('Cofrades', Cofrades);


  function Cofrades(cofradesPrepService, cofradesService) {
    var vm = this;
    vm.filtro = 'nombre';
    vm.busqueda = busqueda;
    
    activate();
    
    function activate() {
      return cofradesPrepService.$promise.then(function(data){vm.cofrades = data.results;});
    }

    function busqueda() {
      var filtro = {};
      filtro[vm.filtro] = vm.buscar;
      cofradesService.cofradesRest().query(filtro, function(data){vm.cofrades = data.results;});
    }

  }

})();