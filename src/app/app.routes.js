(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/state1");

    $stateProvider
      .state("home", {
        url: "/home",
        template: '<p class="lead">Welcome to the UI-Router Demo</p>' +
          '<p>Use the menu above to navigate. ' +
          'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
          '<p>Click these links—<a href="#/c?id=1">Alice</a> or ' +
          '<a href="#/user/42">Bob</a>—to see a url redirect in action.</p>'
      })
      .state('state1', {
        url: "/state1",
        templateProvider: function($templateCache){  
        // simplified, expecting that the cache is filled
        // there should be some checking... and async $http loading if not found
        console.log($templateCache.get('cofrades/cofrades.html'))
        return $templateCache.get('cofrades/cofrades.html'); 
      },
      });
  }

})();