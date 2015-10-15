(function() {
  'use strict';

  angular
    .module('app')
    .controller('RemoveAutoridad', RemoveAutoridad);

  function RemoveAutoridad($state, $mdDialog, autoridadesService) {
    var vm = this;

    vm.removeAutoridad = removeAutoridad;
    
    function removeAutoridad(id, event){
      event.stopPropagation();
      var removeDialog = $mdDialog.confirm()
          .title('Eliminar autoridad')
          .content('¿Está seguro que desea eliminar este autoridad?')
          .ariaLabel('Eliminar autoridad')
          .targetEvent(event)
          .ok('Aceptar')
          .cancel('Cancelar')
          .clickOutsideToClose(true);
      $mdDialog.show(removeDialog).then(function() {
        removeEndAutoridad(id);
      });
    }

    function removeEndAutoridad(id){
      var autoridad = autoridadesService.autoridadesRest().get({id: id}, function(){
        autoridad.$delete({id: id}).then(function(){
          if($state.current.name === 'autoridades'){
            $state.transitionTo($state.current, null, {
              reload: true,
              inherit: false,
              notify: true
            });
          }
          else{
            $state.go('autoridades');
          }
        });
      });
    }

  }

})();