(function() {
  'use strict';

  angular
    .module('app')
    .directive('scrolly', scrolly);

  function scrolly() {
    return {
      restrict: 'A',
      link: function ($rootScope, element, attrs) {
        var raw = element[0];
        element.bind('scroll', function () {
          if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight-5) {
            $rootScope.$emit("scrollDown");
          }
        });
      }
    };
  }

})();
