(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'ngResource',
      'ngMaterial',
      'uiGmapgoogle-maps',
      'ngMessages'
    ])
    .config(csrfToken);

  function csrfToken($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }
})();