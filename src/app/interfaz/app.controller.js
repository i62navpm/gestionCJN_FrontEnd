(function() {
  'use strict';
  
  angular
    .module('app')
    .controller('AppCtrl', AppCtrl);


  function AppCtrl($mdSidenav, $state) {
    var vm = this;
    vm.toggleSidenav = toggleSidenav;
    vm.closeSidenav = closeSidenav;
    vm.navigateTo    = navigateTo;
    
    function toggleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    }

    function closeSidenav(menuId) {
      $mdSidenav(menuId).close();
    }

    function navigateTo(to, menuId){
      closeSidenav(menuId);
      $state.go(to);
    }
  }

})();