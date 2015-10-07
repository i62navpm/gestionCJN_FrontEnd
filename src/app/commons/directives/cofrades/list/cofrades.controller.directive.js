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

    vm.search         = search;
    vm.radioChange    = radioChange;
    vm.goToCofrade    = goToCofrade;
    vm.modifyCofrade  = modifyCofrade;

    var handler = $rootScope.$on('scrollDown', getNextPage);

    $scope.$on('$destroy', function() {
      handler();
      handler = null;
    });

    function getNextPage() {
      if (!vm.bajas)
        getNextPageAltas();
      else
        getNextPageBajas();
    }

    function getNextPageAltas() {
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

    function getNextPageBajas() {
      if (vm.nextPageBajas){
        var parameters = {page: vm.nextPageBajas};

        if (vm.buscar)
          parameters[vm.filtro] = vm.buscar;

        cofradesService.cofradesBajasRest().query(parameters, function(data){
          vm.nextPageBajas = data.next;
          vm.cofradesBajas = vm.cofradesBajas.concat(data.results);
        });
      }
    }

    function search() {
      if (!vm.bajas)
        searchAltas();
      else
        searchBajas();
    }

    function searchAltas() {
      var filtro = {};
      filtro[vm.filtro] = vm.buscar;
      cofradesService.cofradesRest().query(filtro, function(data){
        vm.nextPage = data.next;
        vm.cofrades = data.results;
      });
    }

    function searchBajas() {
      var filtro = {};
      filtro[vm.filtro] = vm.buscar;
      cofradesService.cofradesBajasRest().query(filtro, function(data){
        vm.nextPageBajas = data.next;
        vm.cofradesBajas = data.results;
      });
    }

    function radioChange() {
      vm.buscar = null;
      vm.typeInput = (vm.filtro === 'nombre') ? 'text': 'number';
      vm.search();
    }

    function goToCofrade(id, event){
      $state.go('cofradesDetalle', {cofradeId: id});
    }

    function modifyCofrade(id, event){
      event.stopPropagation();
      $state.go('cofradesCambios', {cofradeId: id});
    }

  }

})();