(function () {
    "use strict";
    angular.module('bomControle')
        .controller('createUserController', ['$scope', function ($scope) {

          $scope.addUser = function() {
            $scope.user.$setDirty();

            if($scope.user.$invalid)
              return;

            var user = {
              id: new Date().getTime(),
              name: $scope.newUser.name,
              dateBirth: $scope.newUser.dateBirth,
              sex: $scope.newUser.sex,
              cpf: $scope.newUser.cpf,
              email: $scope.newUser.email,
              phone: $scope.newUser.phone,
              cellphone: $scope.newUser.cellphone,
              address: {
                street: $scope.newUser.street,
                number: $scope.newUser.number,
                city: $scope.newUser.city,
                cep: $scope.newUser.cep,
              }
            };

            $scope.newUser = {};
            $scope.user.$setPristine();
            $scope.user.$setUntouched();

            console.log(user);

            // Manda um post para a API
            // UI-Alert com o status da solicitação
            
          }

        }]);
})();
