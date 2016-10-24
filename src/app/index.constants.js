/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('itshop')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('userConfig', {
      CURRENCY: '$',
      LANG: 'en',
      ENV: 'dev'
    });

})();
