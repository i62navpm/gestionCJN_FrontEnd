(function() {
  'use strict';
  angular
    .module('app')
    .controller('SectorAddModify', SectorAddModify);

  function SectorAddModify($scope, $filter, $document, $mdToast, $state, $stateParams, getSectorPrepService, sectoresService, cofradesService) {
    var vm = this;
    
    vm.newEncargado = false;
    vm.newCalle     = false;
    vm.indexCalle   = null;

    vm.backState          = backState;
    vm.querySearch        = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.guardar            = guardar;

    activate();

    function activate() {
      if (getSectorPrepService){
        getSectorPrepService.$promise.then(initSector);
      }
      else{
        newEncargado();
      }
    }

    function initSector(data) {
      vm.sector = data[0];
      vm.cofradeSelected = vm.sector.cofrade;
      vm.originSector = vm.sector.numeroSector;
      if ($stateParams.calle === 'new'){
        vm.newCalle = true;
        vm.indexCalle = vm.sector.calles.length;
      }
      else{
        vm.indexCalle = (vm.sector.calles.indexOf($stateParams.calle) > -1) ? vm.sector.calles.indexOf($stateParams.calle) : null;
      }
      return true;
    }

    function newEncargado() {
      vm.newEncargado = true;
      vm.sector = {cofrade: null};
    }

    function backState() {
      window.history.back();
    }

    function querySearch(query) {
      var filtro = {};
      if (isNaN(query))
        filtro.nombre = query;
      else if(!isNaN(query))
        filtro.numeroOrden = query;

      return cofradesService.cofradesRest().query(filtro).$promise.then(function (response) {
        return response.results;
      });
    }

    function selectedItemChange(item) {
      vm.sector.cofrade =  item ? item.id : null;
    }

    function guardar(isValid) {
      if(isValid){
        if (!vm.sector.cofrade){
          $scope.sectorForm.cofrade.$error.required = true;
          showActionToast();
        }
        else{
          if (vm.sector.numeroSector === vm.originSector || vm.newEncargado){
            guardarSector();
          }
          else{
            guardarCambioSector();
          }
        }
      }
      else
        showActionToast();
    }
    
    function guardarSector(){
      sectoresService.sectoresRest().save(vm.sector, guardarSuccess, guardarError);
    }

    function guardarCambioSector(){
      sectoresService.sectoresRest().get({sector: vm.sector.numeroSector}).$promise.then(function(response){
        if (!response[0]){
          $mdToast.show(
            $mdToast.simple()
              .content('No existe ese sector')
              .position('top right')
              .parent($document[0].querySelector('#toastBounds'))
              .hideDelay(3000)
          );
          return;
        }
        response[0].cofrade = response[0].cofrade.id;
        response[0].calles.push(vm.sector.calles[vm.indexCalle]);
        response[0].$save(null, function(){
                                vm.sector.calles.splice(vm.indexCalle, 1);
                                vm.sector.numeroSector = vm.originSector;
                                guardarSector();
                              }, guardarError);
        
      });
    }

    function guardarSuccess(response) {
      $mdToast.show(
        $mdToast.simple()
          .content('Guardado con éxito!!')
          .position('top right')
          .hideDelay(3000)
      );
      $state.go('sectores');
    }

    function guardarError(response) {
      $mdToast.show(
        $mdToast.simple()
          .content('Error al guardar!!')
          .position('top right')
          .parent($document[0].querySelector('#toastBounds'))
          .hideDelay(3000)
      );
    }
    
    function showActionToast() {
      $mdToast.show(
        $mdToast.simple()
          .content('Existen errores en el formulario')
          .action('OK')
          .highlightAction(false)
          .parent($document[0].querySelector('#toastBounds'))
          .position('top right')
      );
    }
  }

})();