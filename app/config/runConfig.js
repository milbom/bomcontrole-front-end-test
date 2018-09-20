(function () {
  "use strict";
  angular.module('bomControle').run(['$rootScope', function ($rootScope) {

    $rootScope.$on('$routeChangeSuccess', function () {
      window.scrollTo(0, 0);
    });

  }]);
})();
