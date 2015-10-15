(function() {
  'use strict';
  angular
    .module('app')
    .controller('AutoridadAddModify', AutoridadAddModify);

  function AutoridadAddModify($scope, $document, $mdToast, $state, getAutoridadPrepService, autoridadesService, cofradesService) {
    var vm = this;
    
    vm.newCofrade = false;

    vm.backState          = backState;
    vm.querySearch        = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.guardar            = guardar;

    activate();

    function activate() {
      if (getAutoridadPrepService){
        getAutoridadPrepService.$promise.then(initAutoridad);
      }
      else{
        newAutoridad();
      }

    }

    function initAutoridad(data) {
      vm.autoridad = data;
      vm.calleSelected = {calle: vm.autoridad.direccion.calle,
                          cp: vm.autoridad.direccion.cp,
                          provincia: vm.autoridad.direccion.provincia,
                          municipio: vm.autoridad.direccion.municipio};
      return true;
    }

    function newAutoridad() {
      vm.newCofrade = true;
      vm.autoridad = {direccion: {}};
    }

    function backState() {
      window.history.back();
    }

    function querySearch(query) {
      return cofradesService.getCalles(query).then(function(response){return response.data;});
    }

    function selectedItemChange(item) {
      if (item){
        vm.autoridad.direccion.calle = item.calle;
        vm.autoridad.direccion.municipio = item.municipio;
        vm.autoridad.direccion.cp = item.cp;
        vm.autoridad.direccion.provincia = item.provincia;
      }else{
        vm.autoridad.direccion.calle = null;
        vm.autoridad.direccion.municipio = null;
        vm.autoridad.direccion.cp = null;
        vm.autoridad.direccion.provincia = null;
      }
    }

    function guardar(isValid) {
      if(isValid){
        vm.autoridad.direccion.calle = vm.autoridad.direccion.calle ? vm.autoridad.direccion.calle : vm.searchText;
        autoridadesService.autoridadesRest().save(vm.autoridad, guardarSuccess, guardarError);
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
      $state.go('autoridades');
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