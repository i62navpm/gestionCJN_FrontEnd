(function() {
  'use strict';

  angular
    .module('app')
    .directive('removeAutoridad', removeAutoridad);


  function removeAutoridad() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/autoridades/remove/removeAutoridad.directive.html',
      scope: {
        autoridadId: '=autoridad'        
      },
      controller: 'RemoveAutoridad',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();