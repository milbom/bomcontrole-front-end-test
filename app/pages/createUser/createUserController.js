(function () {
    "use strict";
    angular.module('bomControle')
        .controller('createUserController', ['$scope', 'userHttpServices', '$rootScope', function ($scope, userHttpServices, $rootScope) {
            $scope.user = { id: 1 };

            $scope.add = function()
            {
                $rootScope.$broadcast('addUser', {user:$scope.user});
            }
        }]);
})();
