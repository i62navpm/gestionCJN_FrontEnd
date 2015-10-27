(function() {
  'use strict';

  angular
    .module('app')
    .directive('loadRepeat', loadRepeat);

  function loadRepeat() {
    return function(scope) {
      if (scope.$last) {
        scope.$eval('vm.completed = true;');
      }
    };
  }

})();
