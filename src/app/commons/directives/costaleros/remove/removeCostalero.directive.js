(function() {
  'use strict';

  angular
    .module('app')
    .directive('removeCostalero', removeCostalero);


  function removeCostalero() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/costaleros/remove/removeCostalero.directive.html',
      scope: {
        costaleroId: '=costalero'        
      },
      controller: 'RemoveCostalero',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();