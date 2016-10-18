(function() {
  'use strict';

  angular
    .module('itshop')
    .service('Basket', BasketService);

  /** @ngInject */
  function BasketService() {
  var basket = [];
    var notifications = [];

    this.subscribe = function(callback) {
      if(notifications.indexOf(callback) == -1) {
        notifications.push(callback);
      }
    }
    this.notify = function() {
      notifications.forEach(function(callback) {
        if( typeof callback === 'function') {
          callback(basket);
        }
      })
    }

    //item: {count: count, id:id} приходит из card
    this.add = function(item) {
      var index = findInBasket(item.id);
      console.log('index', index);
      if(index === -1) {
        basket.push(item);
      } else {
        console.log('basket[index]', basket[index]);
        basket[index].count += item.count;
        console.log('count', count);
      }
      this.notify();
    }

    this.get = function() {
      return basket;
    }

    this.remove = function(id) {
      var index =  findInBasket(item.id);
      if(index !== -1) {
        basket.splice(index, 1);
        this.notify();
      }
    }

    function findInBasket(id) {
      for (var i = 0; i < basket.length; i++) {
        if (basket[i].id == id) {
          return 1;
        }
      }
        return -1;

    }
  }
})();




