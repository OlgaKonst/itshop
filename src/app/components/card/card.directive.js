(function() {
  'use strict';

  angular
    .module('itshop')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/card/card.html',
      scope: {
        product: '='
      },
      controller: CardController,
      controllerAs: 'card',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CardController($scope, Basket) {
      var vm = this;
      vm.count = 1;
      $scope.$watch('card.count', function(newValue) {
        if(newValue < 0) {
          vm.count = 0;
        } else if(newValue > vm.product.count) {
          vm.count = vm.product.count;
        }
      })
      vm.buy = function() {
        Basket.add({
          count: vm.count,
          id: vm.product._id
        });
      }
    }
  }

})();
