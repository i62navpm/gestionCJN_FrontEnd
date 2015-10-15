(function() {
  'use strict';
  angular
    .module('app')
    .controller('DirectivoAddModify', DirectivoAddModify);

  function DirectivoAddModify($scope, $document, $mdToast, $state, getDirectivoPrepService, directivosService, cofradesService) {
    var vm = this;
    
    vm.newCofrade = false;

    vm.backState          = backState;
    vm.querySearch        = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.guardar            = guardar;

    activate();

    function activate() {
      if (getDirectivoPrepService){
        getDirectivoPrepService.$promise.then(initDirectivo);
      }
      else{
        newDirectivo();
      }

    }

    function initDirectivo(data) {
      vm.directivo = data;
      return true;
    }

    function newDirectivo() {
      vm.newCofrade = true;
      vm.directivo = {cofrade: null,
                      fecha: new Date().toLocaleDateString()};
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
      vm.directivo.cofrade =  item ? item.id : null;
    }

    function guardar(isValid) {
      if(isValid){
        if (!vm.directivo.cofrade){
          $scope.directivoForm.cofrade.$error.required = true;
          showActionToast();
        }
        else{
          vm.directivo.cofrade = vm.directivo.cofrade.id ? vm.directivo.cofrade.id : vm.directivo.cofrade;
          directivosService.directivosRest().save(vm.directivo, guardarSuccess, guardarError);
        }
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
      $state.go('directivos');
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