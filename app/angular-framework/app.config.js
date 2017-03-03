(function() {
  'use strict';

  angular.module('mainApp')
  .config(['$locationProvider', '$routeProvider', mainAppConfig]);

  function mainAppConfig($locationProvider, $routeProvider) {

    $routeProvider
    .when('/products', {
     template: '<product-list></product-list>'
   })
    .when('/products/:productId', {
     template: '<product-detail></product-detail>'
   })
    .when('/register', {
     template: '<register></register>'
   })
    .when('/login', {
     template: '<login></login>'
   })
    .otherwise('/products');
  };
  
})();