(function() {
  'use strict';

  angular
    .module('itshop')
    .service('ProductsAPI', Service);

  /** @ngInject */
  function Service($http) {
    this.getAll = function() {
      return $http({
        method: 'GET',
        url: '/app/json/music_store.json'
      });
    }



  }
})();



