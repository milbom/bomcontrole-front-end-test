(function () {
    "use strict";
    angular.module('bomControle')
        .controller('createUserController', ['$scope', 'userHttpServices', function ($scope, userHttpServices) {

            userHttpServices.getUsers()
            .then(function (response) {
                $scope.usuarios = response.data;
                $.each($scope.usuarios, function(i){
                    $scope.usuarios[i].phone = $scope.usuarios[i].phone.replace(/\s+/g, '');
                });
            });

            $scope.delete = function (usuario) {
                $.each($scope.usuarios, function(i){
                    if($scope.usuarios[i].name === usuario.name) {
                        $scope.usuarios.splice(i,1);
                        return false;
                    }
                });
      			};

            $scope.add = function (usuario) {
        				$scope.usuarios.push(angular.copy(usuario))
        				delete $scope.usuario;
        				$scope.userRegister.$setPristine();
      			};
        }]);
})();
