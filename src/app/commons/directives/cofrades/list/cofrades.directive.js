(function() {
  'use strict';

  angular
    .module('app')
    .directive('listaCofrades', listaCofrades);


  function listaCofrades() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/cofrades/list/cofrades.directive.html',
      scope: {
        cofrades: '=cofrades',
        nextPage: '=page',
        cofradesBajas: '=cofradesBajas',
        nextPageBajas: '=pageBajas'
        
      },
      controller: 'ListaCofrades',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();