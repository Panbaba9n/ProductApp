(function() {
  'use strict';

  angular.module('productDetail')
  .component('productDetail', {
   templateUrl: 'angular-framework/product-detail/product-detail.template.html',
   controller: ['$routeParams', 'Products', ProductDetailController]
 });

  function ProductDetailController($routeParams, Products) {          
    var self = this;
    self.productId = $routeParams.productId;
    self.products = Products.query({}, function(products) {
      self.productElement = products[self.productId - 1];
    });
  };
  
})();