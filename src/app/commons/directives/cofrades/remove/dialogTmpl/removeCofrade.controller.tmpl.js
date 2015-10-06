(function() {
  'use strict';

  angular
    .module('app')
    .controller('RemoveCofradeTmpl', RemoveCofradeTmpl);

  function RemoveCofradeTmpl($state, $mdDialog, cofradesService) {
    var vm = this;

    vm.closeDialog = closeDialog;
    vm.removeEndCofrade = removeEndCofrade;

    function closeDialog() {
      $mdDialog.cancel();
    }
    function removeEndCofrade(id){
      var cofrade = cofradesService.cofradesRest().get({id: id}, function(){
        cofrade.baja = {motivo : vm.motivoBaja,
                        fechaBaja: new Date().toLocaleDateString()};

        cofrade.$save({updateNumeroCofrade: true}).then(function(){
          vm.closeDialog();
          if($state.current.name === 'cofrades'){
            $state.transitionTo($state.current, null, {
              reload: true,
              inherit: false,
              notify: true
            });
          }
          else{
            $state.go('cofrades');
          }
        });
      });
    }

  }

})();