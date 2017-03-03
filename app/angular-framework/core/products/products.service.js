(function() {
  'use strict';

  angular.module('core.products')
  .factory('Products', ['$resource', Products]);

  function Products($resource) {
    return $resource('http://smktesting.herokuapp.com/api/products/', {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: true
      }
    });
  };
  
})();