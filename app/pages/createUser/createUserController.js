(function () {
    "use strict";
    angular.module('bomControle')
        .controller('createUserController', ['$scope', function ($scope, userHttpServices) {
            $scope.usuarios = [
                {
                    nome: "Pedro Henrique",
                    email: "pedro_henrique_01@gmail.com",
                    cpf: "85907965070",
                    dataNascimento: "1957-10-16",
                    sexo: "M",
                    telefone: "1112345678",
                    celular: "11963289652",
                    cep: "49082490",
                    endereco: "Rua Sargento Lauro José",
                    bairro: "Novo Paraíso",
                    cidade: "Aracaju",
                    estado: "SE"
                },
                {
                    nome: "Maria Clara",
                    email: "maria.clara@hotmail.com",
                    cpf: "32883173036",
                    dataNascimento: "1986-04-21",
                    sexo: "F",
                    telefone: "1332147896",
                    celular: "13974185296",
                    cep: "59614840",
                    endereco: "Rua Nossa Senhora de Lourdes",
                    bairro: "Santa Delmira",
                    cidade: "Mossoró",
                    estado:  "RN"
                },
            ];

            $scope.delete = function (usuario) {
                $.each($scope.usuarios, function(i){
                    if($scope.usuarios[i].nome === usuario.nome) {
                        $scope.usuarios.splice(i,1);
                        return false;
                    }
                });
      			};

            $scope.add = function (usuario) {
        				$scope.usuarios.push(angular.copy(usuario));
        				delete $scope.usuario;
        				$scope.userRegister.$setPristine();
      			};
        }]);
})();
