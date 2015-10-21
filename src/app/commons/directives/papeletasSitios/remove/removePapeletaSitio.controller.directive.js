(function() {
  'use strict';

  angular
    .module('app')
    .controller('RemovePapeletaSitio', RemovePapeletaSitio);

  function RemovePapeletaSitio($state, $mdDialog, papeletasSitiosService) {
    var vm = this;

    vm.removePapeletaSitio = removePapeletaSitio;
    
    function removePapeletaSitio(id, event){
      event.stopPropagation();
      var removeDialog = $mdDialog.confirm()
          .title('Eliminar papeleta sitio')
          .content('¿Está seguro que desea eliminar esta papeleta de sitio?')
          .ariaLabel('Eliminar papeletaSitio')
          .targetEvent(event)
          .ok('Aceptar')
          .cancel('Cancelar')
          .clickOutsideToClose(true);
      $mdDialog.show(removeDialog).then(function() {
        removeEndPapeletaSitio(id);
      });
    }

    function removeEndPapeletaSitio(papeletaObj){
      papeletasSitiosService.papeletasSitiosRest().save({anio: papeletaObj.anio, 
                                                         papeletas: [papeletaObj.papeleta], remove: true}, function(){
        if($state.current.name === 'papeletasSitios'){
          $state.transitionTo($state.current, null, {
            reload: true,
            inherit: false,
            notify: true
          });
        }
        else{
          $state.go('papeletasSitios');
        }
      });
    }

  }

})();