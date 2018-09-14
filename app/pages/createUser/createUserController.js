(function () {
    "use strict";
    angular.module('bomControle')
        .controller('createUserController', ['$scope', function ($scope) {
            $scope.usuarios = [
                {
                    nome: "Pedro Henrique",
                    email: "pedro_henrique_01@gmail.com",
                    cpf: "859.079.650-70",
                    dataNascimento: "16/10/1957",
                    Sexo: "M",
                    telefone: "(11)1234-5678",
                    celular: "(11)96328-9652",
                    cep: "49082-490",
                    endereco: "Rua Sargento Lauro José",
                    bairro: "Novo Paraíso",
                    cidade: "Aracaju",
                    estado: "SE"
                },
                {
                    nome: "Maria Clara",
                    email: "maria.clara@hotmail.com",
                    cpf: "328.831.730-36",
                    dataNascimento: "21/04/1986",
                    Sexo: "F",
                    telefone: "(13)3214-7896",
                    celular: "(13)97418-5296",
                    cep: "59614-840",
                    endereco: "Rua Nossa Senhora de Lourdes",
                    bairro: "Santa Delmira",
                    cidade: "Mossoró",
                    estado:  "RN"
                },
            ];
        }]);
})();
