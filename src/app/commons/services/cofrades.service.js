(function() {
  'use strict';

  angular
    .module('app')
    .factory('cofradesService', cofradesService);

  function cofradesService($resource, $http, $filter) {
    return {
      cofradesRest: cofradesRest,
      cofradesBajasRest: cofradesBajasRest,
      getCalles: getCalles,
      getRegistros: getRegistros
    };

    function cofradesRest() {
      return $resource('http://127.0.0.1:5050/api/cofrades/:id.json:json', null, {
        'query':  {method:'GET', isArray: false},
        'get':    {method:'GET', transformResponse: function(data, headersGetter) {
                                                      return $filter('stringToDate')(angular.fromJson(data));
                                                    }
                  },
        'save':   {method:'POST', transformRequest: function(data, headersGetter) {
                                                      return angular.toJson($filter('removeNulls')(data));
                                                    }
                  },
      });
    }

    function cofradesBajasRest() {
      return $resource('http://127.0.0.1:5050/api/cofradesBajas/:id.json:json', null, {'query':  {method:'GET', isArray:false}});
    }

    function getCalles() {
      return $http.get('http://127.0.0.1:5050/api/calles/').
              then(function(response){
                return angular.fromJson(response);
              });
    }

    function getRegistros() {
      return $http.get('http://127.0.0.1:5050/api/registros/').
              then(function(response){
                return angular.fromJson(response);
              });
    }
    
  }

})();