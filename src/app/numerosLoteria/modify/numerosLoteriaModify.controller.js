(function() {
  'use strict';
  angular
    .module('app')
    .controller('NumerosLoteria', NumerosLoteria);

  function NumerosLoteria($scope, $document, $mdToast, $state, numerosLoteriaPrepService, numerosLoteriaService) {
    var vm = this;
    
    vm.newCofrade = false;

    vm.guardar = guardar;

    activate();

    function activate() {
      numerosLoteriaPrepService.$promise.then(initNumerosLoteria);
    }

    function initNumerosLoteria(data) {
      vm.numerosLoteria = data[0];
      return true;
    }

    function guardar(isValid) {
      if(isValid){
        numerosLoteriaService.numerosLoteriaRest().save(vm.numerosLoteria, guardarSuccess, guardarError);
      } else {
        showActionToast();
      }
    }
      
    function guardarSuccess(response) {
      $mdToast.show(
        $mdToast.simple()
          .content('Guardado con éxito!!')
          .position('top right')
          .hideDelay(3000)
      );
      $state.go('numerosLoteria');
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