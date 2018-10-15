(function () {
    "use strict";
    angular.module('bomControle')
        .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/users', {
                templateUrl: 'app/pages/users/users.html',
                controller: 'usersController',
            });

    }]);
})();
