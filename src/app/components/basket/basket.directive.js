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
    function BasketController(Basket) {
      var vm = this;
      vm.basket = Basket.get();
      console.log(vm.basket);
    }
    return directive;
  }

})();

