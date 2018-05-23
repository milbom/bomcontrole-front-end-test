(function () {
    "use strict";
    angular.module('bomControle')
        .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/pages/testeFrontEnd/testFrontEnd.html',
                controller: 'testFrontEndController',
            });

    }]);
})();
