(function () {
    "use strict";
    angular.module('bomControle')
    .directive('bcHeader', [function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/bc-header.html'
        };
    }]);
})();
