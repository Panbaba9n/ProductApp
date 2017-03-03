(function() {
  'use strict';

  angular.module('mainApp', [
    /* AngularJS */
    'ngResource',
    'ngRoute',
    /* External libs */
    'LocalStorageModule',
    'ui.bootstrap',
    /* Customs */
    'core',
    'login',
    'register',
    'productList',
    'productDetail',
    'reviewsList',
    'rating'   
    ]);
  
})();