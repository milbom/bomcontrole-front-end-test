(function () {
    "use strict";
    angular.module('bomControle')
        .controller('listUsersController', ['$scope', 'userHttpServices', '$rootScope', function ($scope, userHttpServices, $rootScope) {

            $scope.list = userHttpServices.getUsers()
            .then(function (res) {
                $scope.users = res.data;
            })
            .catch(function (err) {
                console.log(err);
            });

            $scope.remove = function(user)
            {
                var isToDelete = confirm('Certeza que quer excluir?');
                if (isToDelete)
                {
                    for (var i = 0; i < $scope.users.length; i++)
                    {
                        if ($scope.users[i].email == user.email)
                        {
                            $scope.users.splice(i, 1);
                            return;
                        }
                    }
                }
            }

            $rootScope.$on('addUser', function(event, args) 
            {
                $scope.users.push(args.user);
            });

        }]);
})();
