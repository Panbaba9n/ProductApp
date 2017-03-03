(function() {
  'use strict';

  angular.module('core.reviews')
  .factory('Reviews', ['$resource', 'localStorageService', Reviews]);

  function Reviews($resource, localStorageService) {
    return {
      getOverHere: function getOverHere() {
        return $resource('http://smktesting.herokuapp.com/api/reviews/:productId', {}, {
          query: {
            method: 'GET',
            params: {productId: 1},
            isArray: true
          },
          send: {
            method: 'POST',
            url: 'http://smktesting.herokuapp.com/api/reviews/:productId',        
            params: {productId: 1},
            headers: {'Authorization': 'Token ' + localStorageService.get('token')},
          }
        });
      }
    };

  };
  
})();