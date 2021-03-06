(function() {
  'use strict';

  angular
    .module('app')
    .controller('ListaCofrades', ListaCofrades);

  function ListaCofrades($rootScope, $scope, $state, cofradesService) {
    var vm = this;
    
    vm.filtro    = 'nombre';
    vm.buscar    = null;

    vm.search         = search;
    vm.goToCofrade    = goToCofrade;
    vm.modifyCofrade  = modifyCofrade;
    vm.changeTab      = changeTab;

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
      vm.filtro = ( isNaN(vm.buscar)) ? 'nombre': 'numeroOrden';
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

    function goToCofrade(id, event){
      $state.go('cofradesDetalle', {cofradeId: id});
    }

    function modifyCofrade(id, event){
      event.stopPropagation();
      $state.go('cofradesCambios', {cofradeId: id});
    }

    function changeTab(){
      vm.search();
    }

  }

})();