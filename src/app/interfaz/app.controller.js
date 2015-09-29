(function() {
  'use strict';
  
  angular
    .module('app')
    .controller('AppCtrl', AppCtrl);


  function AppCtrl($mdSidenav, $state) {
    var vm = this;
    vm.toggleSidenav = toggleSidenav;
    vm.navigateTo    = navigateTo;
    
    function toggleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    }

    function navigateTo(to, menuId){
      toggleSidenav(menuId);
      $state.go(to);
    }
  }

})();