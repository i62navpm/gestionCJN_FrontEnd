(function() {
  'use strict';

  angular
    .module('app')
    .directive('listaAutoridades', listaAutoridades);


  function listaAutoridades() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/autoridades/list/autoridades.directive.html',
      scope: {
        autoridades: '=autoridades'        
      },
      controller: 'ListaAutoridades',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();