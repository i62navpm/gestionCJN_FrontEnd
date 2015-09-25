(function() {
  'use strict';

  angular
    .module('app')
    .directive('listaCofrades', listaCofrades);


  function listaCofrades() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/cofrades/cofrades.directive.html',
      scope: {
        cofrades: '=cofrades',
        nextPage: '=page'
      },
      controller: 'ListaCofrades',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();