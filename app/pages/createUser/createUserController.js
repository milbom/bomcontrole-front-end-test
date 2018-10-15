(function () {
    "use strict";
    angular.module('bomControle')
        .controller('createUserController', ['$scope','$filter', function ($scope, $filter) {
                    
            $scope.entity = {};
            $scope.entity.sex = "Female";

            $scope.verificarCamposObrigatorios = function(){
                var msg = "";

                if($scope.entity.name == undefined || $scope.entity.name.length <= 0){
                    msg = msg + "Nome é obrigatório \n";
                }

                if($scope.entity.dateBirth == undefined || $scope.entity.dateBirth.length <= 0){
                    msg = msg + "Dt. Nascimento é obrigatório \n";
                }

                if($scope.entity.cpf == undefined || $scope.entity.cpf.length <= 0){
                    msg = msg + "Cpf é obrigatório \n";
                }

                if($scope.entity.email == undefined || $scope.entity.email.length <= 0){
                    msg = msg + "E-mail é obrigatório \n";
                }

                if(msg.length > 0){
                    return true;
                }else{
                    return false;
                }
            }    
            
            $scope.addUser = function(){
                alert("Usuário cadastrado com sucesso");
                $scope.entity = {};
                $scope.entity.sex = "Female";
            }
        }]);
})();
