(function() {
  'use strict';

  angular
    .module('app')
    .controller('RemoveAspirante', RemoveAspirante);

  function RemoveAspirante($state, $mdDialog, aspirantesService) {
    var vm = this;

    vm.removeAspirante = removeAspirante;
    
    function removeAspirante(id, event){
      event.stopPropagation();
      var removeDialog = $mdDialog.confirm()
          .title('Eliminar aspirante')
          .content('¿Está seguro que desea eliminar este aspirante?<br>Perderá su antiguedad.')
          .ariaLabel('Eliminar aspirante')
          .targetEvent(event)
          .ok('Aceptar')
          .cancel('Cancelar')
          .clickOutsideToClose(true);
      $mdDialog.show(removeDialog).then(function() {
        removeEndAspirante(id);
      });
    }

    function removeEndAspirante(id){
      var aspirante = aspirantesService.aspirantesRest().get({id: id}, function(){
        aspirante.$delete({id: id}).then(function(){
          if($state.current.name === 'aspirantes'){
            $state.transitionTo($state.current, null, {
              reload: true,
              inherit: false,
              notify: true
            });
          }
          else{
            $state.go('aspirantes');
          }
        });
      });
    }

  }

})();