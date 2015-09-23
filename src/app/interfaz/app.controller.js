(function() {
  'use strict';
  
  angular
    .module('app')
    .controller('AppCtrl', AppCtrl);


  function AppCtrl($mdSidenav) {
    var vm = this;
    vm.toggleSidenav = toggleSidenav;
    
    function toggleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    }
  }

})();