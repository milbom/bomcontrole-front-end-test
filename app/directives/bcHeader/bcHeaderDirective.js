(function () {
    "use strict";
    angular.module('bomControle')
    .directive('bcHeader', [function () {
        return {
            restrict: 'AE',
            templateUrl: 'app/directives/bcHeader/bcHeaderTemplate.html',
            scope: {
                
            },
            link: function ($scope, $element, $attrs, $ctrl) {
                $scope.$on('$routeChangeSuccess', function (data,result) {
                    $(".active").each(function () {
                        $(this).removeClass('active');
                    });

                    var active = result.$$route.originalPath; 
                    active = active.substring(1, active.length);

                    if(active == ""){
                        $("#home").addClass('active');
                    }else{
                        $("#"+active).addClass('active');
                    }
        
                });
            }
        };
    }]);
})();