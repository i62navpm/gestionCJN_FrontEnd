(function() {
  'use strict';

  angular
    .module('app')
    .directive('removeCofrade', removeCofrade);


  function removeCofrade() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/cofrades/remove/removeCofrade.directive.html',
      scope: {
        cofradeId: '=cofrade'        
      },
      controller: 'RemoveCofrade',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();