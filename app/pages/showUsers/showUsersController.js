(function () {
    "use strict";
    angular.module('bomControle')
        .controller('showUsersController', ['$scope', 'userHttpServices', function ($scope, userHttpServices) {

          userHttpServices.getUsers()
            .then(function(data) {
              $scope.users = data.data;
            })
            .catch(function (err) {
                console.log(err);
          });

          $scope.removeUser = function(user){
              var confirmacao = confirm('Você tem certeza que deseja excluir o '+user.name+'?');
              if (confirmacao) {
                  for (var i = 0; i < $scope.users.length; i++) {
                      if ($scope.users[i].id == user.id) {
                          $scope.users.splice(i, 1);
                          return;
                      }
                  }
              }
          };

          $scope.ordernarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
          };

        }]);
})();
