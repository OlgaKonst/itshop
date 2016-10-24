(function() {
  'use strict';

  angular
    .module('itshop')
    .service('Basket', BasketService)
    .constant('BasketEvents', {
      UPDATED: 'basket-updated'
    });

  /** @ngInject */
  function BasketService($rootScope, BasketEvents) {
    var basket = [];
    this.totalGoods = 0;//кол-во товара
    this.totalCost = 0;//сумма заказа
    var notifications = [];

/*    this.subscribe = function(callback) {
      if(typeof callback === 'function' && notifications.indexOf(callback) == -1) {
        notifications.push(callback);
      }
    }
    //можно было бы и var notify, так как она внутренняя функция
    this.notify = function() {
      notifications.forEach(function(callback) {
                 callback(basket);
      })
    }*/
    var notify = function() {
      $rootScope.$broadcast(BasketEvents.UPDATED, basket);
    }
    //item: {count: count, id:id} приходит из card
    this.add = function(item) {
      var index = findInBasket(item.id);
      var count = +item.count;
      var cost = +item.cost * count;
      if(index === -1) {
        basket.push(item);
      } else {
        basket[index].count += item.count;
      }
      this.totalGoods += count;
      this.totalCost += cost;
      notify();
     // this.notify();
    }

    this.get = function() {
      return basket;
    }

    this.remove = function(id) {
      var index =  findInBasket(item.id);
      if(index !== -1) {
        basket.splice(index, 1);
        //this.notify();
        notify();
      }
    }

    function findInBasket(id) {
      for (var i = 0; i < basket.length; i++) {
        if (basket[i].id == id) {
          return i;
        }
      }
        return -1;

    }
  }
})();




