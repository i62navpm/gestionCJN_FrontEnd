(function() {
  'use strict';
  angular
    .module('app')
    .controller('PapeletaSitioAddModify', PapeletaSitioAddModify);

  function PapeletaSitioAddModify($scope, $filter, $document, $mdToast, $state,  papeletasSitiosService, cofradesService) {
    var vm = this;
    
    vm.newCofrade = false;

    vm.backState          = backState;
    vm.querySearch        = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.guardar            = guardar;

    newpapeletaSitio();

    function newpapeletaSitio() {
      vm.newCofrade = true;
      vm.fecha = new Date().toLocaleDateString();
      vm.papeletaSitio = {cofrade: null};
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
      vm.papeletaSitio.cofrade =  item ? item.id : null;
    }

    function guardar(isValid) {
      if(isValid){
        if (!vm.papeletaSitio.cofrade){
          $scope.papeletaSitioForm.cofrade.$error.required = true;
          showActionToast();
        }
        else{
          vm.papeletaSitio.fecha = vm.fecha;
          $filter('formatDates')(vm.papeletaSitio);
          papeletasSitiosService.papeletasSitiosRest().save({anio: new Date(vm.papeletaSitio.fecha).getFullYear(), 
                                                                            papeletas:[vm.papeletaSitio]},
                                                             guardarSuccess,
                                                             guardarError);
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
      $state.go('papeletasSitios');
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