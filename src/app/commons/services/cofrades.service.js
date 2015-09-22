(function() {
  'use strict';

  angular
    .module('app')
    .factory('cofradesService', cofradesService);

  function cofradesService($resource, $filter) {
    return {
      getCofrades: getCofrades,
      getCofradesBajas: getCofradesBajas
    };

    function getCofrades() {
      return $resource('http://127.0.0.1:5050/api/cofrades/:id.json:json', null, {
        'query':  {method:'GET', isArray:false},
        'save':   {method:'POST', transformRequest: function(data, headersGetter) {
                                                      return angular.toJson($filter('removeNulls')(data));
                                                    }
                  },
      });
    }

    function getCofradesBajas() {
      return $resource('http://127.0.0.1:5050/api/cofradesBajas/:id.json:json', null, {'query':  {method:'GET', isArray:false}});
    }
    
  }

})();