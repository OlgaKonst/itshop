(function() {
  'use strict';

  angular
    .module('itshop')
    .directive('basket', BasketDirective);

  /** @ngInject */
  function BasketDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/basket/basket.html',
      scope: {},
      controller: BasketController,
      controllerAs: 'basketCtrl',
      bindToController: true
    };


    /** @ngInject */
    function BasketController($scope, Basket, BasketEvents, userConfig) {
      var vm = this;
      vm.currency = userConfig.CURRENCY;
      vm.basket = Basket.get();
      $scope.$on(BasketEvents.UPDATED, function(e, data) {
        console.log(e, data);
      })

 /*     Basket.subscribe(function(data) {
        vm.basket = data;
        vm.totalGoods = Basket.totalGoods;
        vm.totalCost = Basket.totalCost;
        console.log('vm.totalGoods',vm.totalGoods, Basket.totalCost);
      })*/
    }
    return directive;
  }

})();

