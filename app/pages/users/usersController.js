(function () {
    "use strict";
    angular.module('bomControle')
        .controller('usersController', ['$scope','$filter','userHttpServices', function ($scope, $filter, userHttpServices) {
            $scope.list = {};
            
            $scope.list.users = [];
            $scope.list.temporary = [];

            $scope.search = "";

            $scope.getUsers = function(){
                userHttpServices.getUsers().then(function(result) {
                    $scope.list.users = result.data;
                    $scope.list.temporary = result.data;
                    console.log($scope.list.users);
                });
            }

            $scope.removeUser = function(index){
                $scope.list.users.splice(index,1);
                $scope.list.temporary = angular.copy($scope.list.users);
            }

           $scope.updateList = function(){
                $scope.list.temporary = $filter('filter')($scope.list.users, $scope.search);
            } 

            $scope.getUsers();
            
        }]);
})();
