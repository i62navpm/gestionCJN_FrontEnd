(function() {
  'use strict';
  angular
    .module('app')
    .controller('GastosBancarios', GastosBancarios);

  function GastosBancarios($scope, $document, $mdToast, $state, gastosBancariosPrepService, gastosBancariosService) {
    var vm = this;
    
    vm.newCofrade = false;

    vm.guardar = guardar;

    activate();

    function activate() {
      gastosBancariosPrepService.$promise.then(initGastoBancario);
    }

    function initGastoBancario(data) {
      vm.gastoBancario = data[0];
      return true;
    }

    function guardar(isValid) {
      if(isValid){
        gastosBancariosService.gastosBancariosRest().save(vm.gastoBancario, guardarSuccess, guardarError);
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
      $state.go('gastosBancarios');
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