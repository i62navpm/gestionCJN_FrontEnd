(function() {
  'use strict';

  angular
    .module('app')
    .controller('RemoveCofrade', RemoveCofrade);

  function RemoveCofrade($state, $mdDialog) {
    var vm = this;

    vm.removeCofrade = removeCofrade;
    
    function removeCofrade(id, event){
      event.stopPropagation();
      $mdDialog.show({
        templateUrl: './templates/directives/cofrades/remove/dialogTmpl/removeCofrade.tmpl.html',
        locals: {id: id},
        controller: 'RemoveCofradeTmpl',
        controllerAs: 'vm',
        bindToController: true,
        targetEvent: event,
        clickOutsideToClose:true
      }).then(function() {
        //removeEndCofrade(id);
      });
    }

  }
})();