(function() {
  'use strict';

  angular
    .module('itshop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {
    $rootScope.test = 24;
    $log.debug('runBlock end');
  }

})();
