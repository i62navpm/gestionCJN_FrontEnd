(function() {
  'use strict';

  angular
    .module('app')
    .controller('ListaCofrades', ListaCofrades);

  function ListaCofrades($rootScope, $scope, $state, cofradesService) {
    var vm = this;
    
    vm.filtro    = 'nombre';
    vm.typeInput = 'text';
    vm.buscar    = null;

    vm.busqueda      = busqueda;
    vm.radioChange   = radioChange;
    vm.goToCofrade   = goToCofrade;
    vm.modifyCofrade = modifyCofrade;

    var handler = $rootScope.$on('scrollDown', getNextPage);

    $scope.$on('$destroy', function() {
      handler();
      handler = null;
    });

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
        vm.nextPage = data.next;
        vm.cofrades = data.results;
      });
    }

    function radioChange() {
      vm.buscar = null;
      vm.typeInput = (vm.filtro === 'nombre') ? 'text': 'number';
    }

    function goToCofrade(id, event){
      $state.go('cofradesDetalle', {cofradeId: id});
    }

    function modifyCofrade(id, event){
      $state.go('cofradesCambios', {cofradeId: id});
    }

  }

})();