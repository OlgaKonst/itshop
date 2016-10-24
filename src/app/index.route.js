(function() {
  'use strict';

  angular
    .module('itshop')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('products', {
          url: '/products',
          templateUrl: "app/products/index.html",
          controller: 'ProductsController',
          controllerAs: 'products'
      })
        .state('basket', {
          url: '/basket',
          templateUrl: 'app/basket/index.html',
          controller: 'BasketController',
          controllerAs: 'basket'
        });
      $urlRouterProvider.otherwise('/products')
    });
})();
