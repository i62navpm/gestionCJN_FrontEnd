(function() {
  'use strict';

  angular
    .module('app')
    .controller('RestoreCofrade', RestoreCofrade);

  function RestoreCofrade($state, $mdDialog, cofradesService) {
    var vm = this;

    vm.restoreCofrade = restoreCofrade;
    
    function restoreCofrade(id, event){
      event.stopPropagation();
      var restaurarDialog = $mdDialog.confirm()
          .title('Restaurar cofrade')
          .content('¿Está seguro que desea restaurar este cofrade?<br>Su número de Cofrade se calculará de nuevo.')
          .ariaLabel('Restaurar cofrade')
          .targetEvent(event)
          .ok('Aceptar')
          .cancel('Cancelar')
          .clickOutsideToClose(true);
      $mdDialog.show(restaurarDialog).then(function() {
        restoreEndCofrade(id);
      });
    }

    function restoreEndCofrade(id){
      var cofrade = cofradesService.cofradesRest().get({id: id}, function(){
        cofrade.baja = null;
        cofrade.$save({updateNumeroCofrade: true}).then(function(){
          if($state.current.name === 'cofrades'){
            $state.transitionTo($state.current, null, {
              reload: true,
              inherit: false,
              notify: true
            });
          }
          else{
            $state.go('cofrades');
          }
        });
      });
    }

  }

})();