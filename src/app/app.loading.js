(function() {
  'use strict';

  angular
    .module('app')
    .factory('myHttpInterceptor', myHttpInterceptor)
    .config(loadingSpinner);

  function loadingSpinner($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
  }

  function myHttpInterceptor($q) {
    var loadScreen = angular.element(document.querySelector('.m-app-loading'));
    return {
      // optional method
      'request': function(config) {
        // do something on success
        if (config.method === 'POST')
          loadScreen.css('display', 'block');
        return config;
      },

      // optional method
     'requestError': function(rejection) {
        // do something on error
        return $q.reject(rejection);
      },

      // optional method
      'response': function(response) {
        // do something on success
        loadScreen.css('display', 'none');
        return response;
      },

      // optional method
     'responseError': function(rejection) {
        // do something on error
        if (rejection.status === 401){
          document.location.href = 'login/';
        }
        
        loadScreen.css('display', 'none');
        return $q.reject(rejection);
      }
    };
  }

})();
