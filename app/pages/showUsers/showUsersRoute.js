(function () {
    "use strict";
    angular.module('bomControle')
        .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/show-users', {
                templateUrl: 'app/pages/showUsers/showUsers.html',
                controller: 'showUsersController',
            });

    }]);
})();
