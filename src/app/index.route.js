(function() {
  'use strict';

  angular
    .module('itshop')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'app/products/index.html',
        controller: 'ProductsController',
        controllerAs: 'products'
      })
      .when('/basket', {
        templateUrl: 'app/basket/index.html',
        controller: 'BasketController',
        controllerAs: 'basket'
      })
      .otherwise({
        redirectTo: '/products'
      });
  }

})();
