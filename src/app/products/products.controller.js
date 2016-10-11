(function() {
  'use strict';

  angular
    .module('itshop')
    .controller('ProductsController', ProductsController);

  /** @ngInject */
  function ProductsController($scope,ProductsAPI, toastr) {
    var vm = this;
    ProductsAPI.getAll()
      .then(function(response) {
        vm.data = response.data;
      });




  }
})();

