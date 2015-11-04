(function() {
  /* globals loginForm: false */
  'use strict';

  angular
    .module('app')
    .controller('Login', Login);

  function Login($scope, $http, $httpParamSerializer, $compile, $state) {
    var vm = this;
    
    vm.processForm = processForm;

    function processForm() {
      $http({
        method  : 'POST',
        url     : '/login/',
        data    : $httpParamSerializer({csrfmiddlewaretoken: loginForm.csrfmiddlewaretoken.value, 
                                        username: loginForm.username.value,
                                        password: loginForm.password.value,
                                        next: loginForm.next.value}),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
      })
      .success(function(data) {
        if (data === 'Login') {
          $state.go('home');
        }
        var element = angular.element(document.querySelector('md-content[ui-view]'));
        element[0].innerHTML = data;
        $compile(element.contents())($scope);
      });
    }
  }

})();