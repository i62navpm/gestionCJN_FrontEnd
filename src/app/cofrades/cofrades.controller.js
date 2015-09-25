(function() {
  'use strict';
  angular
    .module('app')
    .controller('Cofrades', Cofrades);


  function Cofrades($rootScope, cofradesPrepService, cofradesService) {
    var vm = this;
    
    vm.filtro   = 'nombre';
    vm.typeInput   = 'text';
    vm.buscar   = null;
    vm.nextPage = null;
    vm.busqueda    = busqueda;
    vm.radioChange = radioChange;
    activate();
    
    function activate() {
      return cofradesPrepService.$promise.then(function(data){
        vm.nextPage = data.next;
        vm.cofrades = data.results;
        $rootScope.$on('scrollDown', getNextPage);
      });
        
    }

    function getNextPage() {
      if (vm.nextPage){
        var parameters = {page: vm.nextPage};

        if (vm.buscar)
          parameters[vm.filtro] = vm.buscar;

        cofradesService.cofradesRest().query(parameters, function(data){
          vm.nextPage = data.next;
          vm.cofrades = vm.cofrades.concat(data.results);
        });
      }
    }

    function busqueda() {
      var filtro = {};
      filtro[vm.filtro] = vm.buscar;
      cofradesService.cofradesRest().query(filtro, function(data){
        console.log(data.next)
        vm.nextPage = data.next;
        vm.cofrades = data.results;
      });
    }

    function radioChange() {
      vm.buscar = null;
      vm.typeInput = (vm.filtro === 'nombre') ? 'text': 'number';
    }

  }

})();