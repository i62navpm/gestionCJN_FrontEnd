(function() {
  'use strict';

  angular
    .module('app')
    .controller('RemoveCostalero', RemoveCostalero);

  function RemoveCostalero($state, $mdDialog, costalerosService) {
    var vm = this;

    vm.removeCostalero = removeCostalero;
    
    function removeCostalero(id, event){
      event.stopPropagation();
      var removeDialog = $mdDialog.confirm()
          .title('Eliminar costalero')
          .content('¿Está seguro que desea eliminar este costalero?<br>Dejará su sitio libre.')
          .ariaLabel('Eliminar costalero')
          .targetEvent(event)
          .ok('Aceptar')
          .cancel('Cancelar')
          .clickOutsideToClose(true);
      $mdDialog.show(removeDialog).then(function() {
        removeEndCostalero(id);
      });
    }

    function removeEndCostalero(id){
      var costalero = costalerosService.costalerosRest().get({id: id}, function(){
        costalero.cofrade = null;
        costalero.talla = null;
        costalero.fecha = null;
        
        costalero.$save().then(function(){
          if($state.current.name === 'costaleros'){
            $state.transitionTo($state.current, null, {
              reload: true,
              inherit: false,
              notify: true
            });
          }
          else{
            $state.go('costaleros');
          }
        });
      });
    }

  }

})();