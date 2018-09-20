(function () {
    "use strict";
    angular.module('bomControle')
        .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/list-users', {
                templateUrl: 'app/pages/listUsers/listUsers.html',
                controller: 'listUsersController',
            });

    }]);
})();
