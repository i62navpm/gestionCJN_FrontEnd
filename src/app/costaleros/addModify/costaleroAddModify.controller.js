(function() {
  'use strict';
  angular
    .module('app')
    .controller('CostaleroAddModify', CostaleroAddModify);

  function CostaleroAddModify($scope, $filter, $document, $mdToast, $state, getCostaleroPrepService, costalerosService, cofradesService) {
    var vm = this;
    
    vm.backState          = backState;
    vm.querySearch        = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.guardar            = guardar;

    activate();

    function activate() {
      if (getCostaleroPrepService){
        getCostaleroPrepService.$promise.then(initCostalero);
      }

    }

    function initCostalero(data) {
      vm.costalero = data;
      vm.cofradeSelected = vm.costalero.cofrade;
      return true;
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
      vm.costalero.cofrade =  item ? item.id : null;
    }    

    function guardar(isValid) {
      if(isValid){
        vm.costalero.fecha = (vm.costalero.fecha === "") ? null : vm.costalero.fecha;
        if (!vm.costalero.cofrade){
          $scope.costaleroForm.cofrade.$error.required = true;
          showActionToast();
        }
        else{
          costalerosService.costalerosRest().save(vm.costalero, guardarSuccess, guardarError);
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
      $state.go('costaleros');
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