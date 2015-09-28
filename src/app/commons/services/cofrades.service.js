(function() {
  'use strict';

  angular
    .module('app')
    .factory('cofradesService', cofradesService);

  function cofradesService($resource, $filter) {
    return {
      cofradesRest: cofradesRest,
      cofradesBajasRest: cofradesBajasRest
    };

    function cofradesRest() {
      return $resource('http://127.0.0.1:5050/api/cofrades/:id.json:json', null, {
        'query':  {method:'GET', isArray: false, cache: true},
        'save':   {method:'POST', transformRequest: function(data, headersGetter) {
                                                      return angular.toJson($filter('removeNulls')(data));
                                                    }
                  },
      });
    }

    function cofradesBajasRest() {
      return $resource('http://127.0.0.1:5050/api/cofradesBajas/:id.json:json', null, {'query':  {method:'GET', isArray:false}});
    }
    
  }

})();