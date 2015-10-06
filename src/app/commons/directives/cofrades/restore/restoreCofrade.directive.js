(function() {
  'use strict';

  angular
    .module('app')
    .directive('restoreCofrade', restoreCofrade);


  function restoreCofrade() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/cofrades/restore/restoreCofrade.directive.html',
      scope: {
        cofradeId: '=cofrade'        
      },
      controller: 'RestoreCofrade',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();