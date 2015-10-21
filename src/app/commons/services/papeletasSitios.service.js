(function() {
  'use strict';

  angular
    .module('app')
    .factory('papeletasSitiosService', papeletasSitiosService);

  function papeletasSitiosService($resource, $filter) {
    return {
      papeletasSitiosRest: papeletasSitiosRest
    };

    function papeletasSitiosRest() {
      return $resource('http://127.0.0.1:5050/api/papeletasSitios/:id.json:json', null, {
        'query':  {method:'GET', isArray: true},
        'save':   {method:'POST', transformRequest: function(data, headersGetter) {
                                                      return angular.toJson($filter('removeNulls')(data));
                                                    }
                  },
      });
    }
   
  }

})();