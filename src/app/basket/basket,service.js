(function() {
  'use strict';

  angular
    .module('itshop')
    .service('Basket', BasketService);

  /** @ngInject */
  function BasketService() {
  var basket = [];

        //item: {count: count, id:id} приходит из card
    this.add = function(item) {
      var index = findInBasket(item.id);
      if(index === -1) {
        basket.push(item);
      } else {
        basket.index.count += item.count;
      }
    }

    this.get = function() {
      return basket;
    }

    this.remove = function(id) {
      var index =  findInBasket(item.id);
      if(index !== id) {
        basket.splice(index, 1);
      }
    }

    function findInBasket(id) {
      for (var i = 0; i < basket.length; i++) {
        if (basket[i].id == id) {
          return 1;
        }
        return -1;
      }
    }
  }
})();




