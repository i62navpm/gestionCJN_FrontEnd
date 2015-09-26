(function() {
  'use strict';
  angular
    .module('app')
    .controller('CofradeDetalle', CofradeDetalle);

  function CofradeDetalle(getCofradePrepService) {
    var vm = this;
    
    activate();
    
    function activate() {
      return getCofradePrepService.$promise.then(function(data){
        console.log(data);
      });
    }

  }

})();