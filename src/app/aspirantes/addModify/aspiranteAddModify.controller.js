(function() {
  'use strict';
  angular
    .module('app')
    .controller('AspiranteAddModify', AspiranteAddModify);

  function AspiranteAddModify($scope, $document, $mdToast, $state, getAspirantePrepService, aspirantesService, cofradesService) {
    var vm = this;
    
    vm.newCofrade = false;

    vm.backState          = backState;
    vm.querySearch        = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.guardar            = guardar;

    activate();

    function activate() {
      if (getAspirantePrepService){
        getAspirantePrepService.$promise.then(initAspirante);
      }
      else{
        newAspirante();
      }

    }

    function initAspirante(data) {
      vm.aspirante = data;
      return true;
    }

    function newAspirante() {
      vm.newCofrade = true;
      vm.aspirante = {cofrade: null,
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
      vm.aspirante.cofrade =  item ? item.id : null;
    }

    function guardar(isValid) {
      if(isValid){
        if (!vm.aspirante.cofrade){
          $scope.aspiranteForm.cofrade.$error.required = true;
          showActionToast();
        }
        else{
          vm.aspirante.cofrade = vm.aspirante.cofrade.id ? vm.aspirante.cofrade.id : vm.aspirante.cofrade;
          aspirantesService.aspirantesRest().save(vm.aspirante, guardarSuccess, guardarError);
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
      $state.go('aspirantes');
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