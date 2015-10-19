(function() {
  'use strict';

  angular
    .module('app')
    .controller('RemoveSector', RemoveSector);

  function RemoveSector($state, $mdDialog, $mdToast, sectoresService) {
    var vm = this;

    vm.removeSector = removeSector;
    
    function removeSector(id, event){
      event.stopPropagation();
      var removeDialog = $mdDialog.confirm()
          .title('Eliminar sector')
          .content('¿Está seguro que desea eliminar este sector?')
          .ariaLabel('Eliminar sector')
          .targetEvent(event)
          .ok('Aceptar')
          .cancel('Cancelar')
          .clickOutsideToClose(true);
      $mdDialog.show(removeDialog).then(function() {
        removeEndSector(id);
      });
    }

    function removeEndSector(id){
      var sector = sectoresService.sectoresRest().get({id: id}, function(){
        if(sector[0].calles.length !== 0){
          $mdToast.show(
            $mdToast.simple()
              .content('No se puede eliminar un sector con calles asignadas')
              .position('top right')
              .hideDelay(3000)
          );
        }
        else{
          sector[0].$delete({id: id}).then(function(){
            if($state.current.name === 'sectores'){
              $state.transitionTo($state.current, null, {
                reload: true,
                inherit: false,
                notify: true
              });
            }
            else{
              $state.go('sectores');
            }
          });
        }
        
      });
    }

  }

})();