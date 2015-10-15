(function() {
  'use strict';

  angular
    .module('app')
    .controller('RemoveDirectivo', RemoveDirectivo);

  function RemoveDirectivo($state, $mdDialog, directivosService) {
    var vm = this;

    vm.removeDirectivo = removeDirectivo;
    
    function removeDirectivo(id, event){
      event.stopPropagation();
      var removeDialog = $mdDialog.confirm()
          .title('Eliminar directivo')
          .content('¿Está seguro que desea eliminar este directivo?')
          .ariaLabel('Eliminar directivo')
          .targetEvent(event)
          .ok('Aceptar')
          .cancel('Cancelar')
          .clickOutsideToClose(true);
      $mdDialog.show(removeDialog).then(function() {
        removeEndDirectivo(id);
      });
    }

    function removeEndDirectivo(id){
      var directivo = directivosService.directivosRest().get({id: id}, function(){
        directivo.$delete({id: id}).then(function(){
          if($state.current.name === 'directivos'){
            $state.transitionTo($state.current, null, {
              reload: true,
              inherit: false,
              notify: true
            });
          }
          else{
            $state.go('directivos');
          }
        });
      });
    }

  }

})();