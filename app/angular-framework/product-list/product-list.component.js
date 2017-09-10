(function() {
  'use strict';

  angular.module('productList')
  .component('productList', {
    templateUrl: 'angular-framework/product-list/product-list.template.html',
    controller: ['Products', ProductListController]
  });

  function ProductListController(Products) {
    var self = this
    self.products = [];

    activate();

    /////

    function activate() {
      return  self.products = Products.query();
    };
  };

})();