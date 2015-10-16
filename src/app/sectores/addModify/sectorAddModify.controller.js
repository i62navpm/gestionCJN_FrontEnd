(function() {
  'use strict';
  angular
    .module('app')
    .controller('SectorAddModify', SectorAddModify);

  function SectorAddModify($scope, $document, $mdToast, $state, getSectorPrepService, sectoresService, cofradesService) {
    var vm = this;
    
    vm.newCofrade = false;

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
        newSector();
      }

    }

    function initSector(data) {
      vm.sector = data;
      vm.calleSelected = {calle: vm.sector.direccion.calle,
                          cp: vm.sector.direccion.cp,
                          provincia: vm.sector.direccion.provincia,
                          municipio: vm.sector.direccion.municipio};
      return true;
    }

    function newSector() {
      vm.newCofrade = true;
      vm.sector = {direccion: {}};
    }

    function backState() {
      window.history.back();
    }

    function querySearch(query) {
      return cofradesService.getCalles(query).then(function(response){return response.data;});
    }

    function selectedItemChange(item) {
      if (item){
        vm.sector.direccion.calle = item.calle;
        vm.sector.direccion.municipio = item.municipio;
        vm.sector.direccion.cp = item.cp;
        vm.sector.direccion.provincia = item.provincia;
      }else{
        vm.sector.direccion.calle = null;
        vm.sector.direccion.municipio = null;
        vm.sector.direccion.cp = null;
        vm.sector.direccion.provincia = null;
      }
    }

    function guardar(isValid) {
      if(isValid){
        vm.sector.direccion.calle = vm.sector.direccion.calle ? vm.sector.direccion.calle : vm.searchText;
        sectoresService.sectoresRest().save(vm.sector, guardarSuccess, guardarError);
      }
      else
        showActionToast();
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