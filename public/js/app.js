(function() {
    "use strict";
    angular.module('bomControle', [
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ui.select',
        'ngSanitize',
        'ui.utils.masks',
        'ui-notification',
    ]);
})();

(function () {
  "use strict";
  angular.module('bomControle')

    .filter('cpf', [function () {
      return function (text) {
        return text ? String(text).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : '';
      };
    }])
    .filter('rg', [function () {
      return function (text) {
        return text ? String(text).replace(/^(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4") : '';
      };
    }])

    .filter('telefone', [function () {
      return function (text) {
        return text ? String(text).replace(/^(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3") : '';
      };
    }])

    .filter('cep', [function () {
        return function (text) {
          return text ? String(text).replace(/^(\d{5})(\d{3})/, "$1-$2") : '';
        };
    }]);
})();

(function () {
    "use strict";
    angular.module('bomControle')
    .directive('example', [function () {
        return {
            restrict: 'AE',
            scope: {

            },
            // link: function ($scope, $element, $attrs, $ctrl) {

            // }
        };
    }]);
})();
(function () {
    "use strict";
    angular.module('bomControle')
    .constant('config', {
        API_URL: ''
    })
    .config(['NotificationProvider', function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 80,
            maxCount: 5,
        });
    }]);
})();

(function () {
  "use strict";
  angular.module('bomControle')
    .config(['$routeProvider', '$controllerProvider', '$locationProvider', function ($routeProvider, $controllerProvider, $locationProvider) {

      $routeProvider.otherwise({ redirectTo: '/' });

      $controllerProvider.allowGlobals();
      $locationProvider.hashPrefix('');

    }]);
})();

(function () {
  "use strict";
  angular.module('bomControle').run(['$rootScope', function ($rootScope) {

    $rootScope.$on('$routeChangeSuccess', function () {
      window.scrollTo(0, 0);
    });

  }]);
})();

(function () {
    "use strict";
    angular.module('bomControle')
        .controller('createUserController', [function () {


        }]);
})();

(function () {
    "use strict";
    angular.module('bomControle')
        .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/create-user', {
                templateUrl: 'app/pages/createUser/createUser.html',
                controller: 'createUserController',
            });

    }]);
})();

(function () {
    "use strict";
    angular.module('bomControle')
        .controller('testFrontEndController', ['$scope', function ($scope) {
            
            $scope.testFrontEnd = "Teste Front-End";

        }]);
})();

(function () {
    "use strict";
    angular.module('bomControle')
        .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/pages/testeFrontEnd/testFrontEnd.html',
                controller: 'testFrontEndController',
            });

    }]);
})();

(function () {
    "use strict";
    angular.module('bomControle')
        .factory('userHttpServices', ['$http', 'config', function ($http) {

            var _getUsers = function () {
                return $http({
                    method: 'GET',
                    url: 'users.json',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            };

            return {
                getUsers: _getUsers
            };

        }]);

})();
(function () {
    "use strict";
    angular.module('bomControle')
        .factory('exampleUtilService', [function () {

            var _fazAlgo = function (params) {
                console.log(params);
            };

            return {
                fazAlgo: _fazAlgo
            };

        }]);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImZpbHRlcnMvZmlsdGVycy5qcyIsImRpcmVjdGl2ZXMvZXhhbXBsZURpcmVjdGl2ZS5qcyIsImNvbmZpZy9jb25maWcuanMiLCJjb25maWcvcm91dGVDb25maWcuanMiLCJjb25maWcvcnVuQ29uZmlnLmpzIiwicGFnZXMvY3JlYXRlVXNlci9jcmVhdGVVc2VyQ29udHJvbGxlci5qcyIsInBhZ2VzL2NyZWF0ZVVzZXIvY3JlYXRlVXNlclJvdXRlLmpzIiwicGFnZXMvdGVzdGVGcm9udEVuZC90ZXN0RnJvbnRFbmRDb250cm9sbGVyLmpzIiwicGFnZXMvdGVzdGVGcm9udEVuZC90ZXN0RnJvbnRFbmRSb3V0ZS5qcyIsInNlcnZpY2VzL2h0dHAvdXNlckh0dHBTZXJ2aWNlcy5qcyIsInNlcnZpY2VzL3V0aWwvZXhhbXBsZVV0aWxTZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdib21Db250cm9sZScsIFtcbiAgICAgICAgJ25nUm91dGUnLFxuICAgICAgICAnbmdBbmltYXRlJyxcbiAgICAgICAgJ25nVG91Y2gnLFxuICAgICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICAgJ3VpLnNlbGVjdCcsXG4gICAgICAgICduZ1Nhbml0aXplJyxcbiAgICAgICAgJ3VpLnV0aWxzLm1hc2tzJyxcbiAgICAgICAgJ3VpLW5vdGlmaWNhdGlvbicsXG4gICAgXSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGFuZ3VsYXIubW9kdWxlKCdib21Db250cm9sZScpXG5cbiAgICAuZmlsdGVyKCdjcGYnLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0ZXh0ID8gU3RyaW5nKHRleHQpLnJlcGxhY2UoL14oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS8sIFwiJDEuJDIuJDMtJDRcIikgOiAnJztcbiAgICAgIH07XG4gICAgfV0pXG4gICAgLmZpbHRlcigncmcnLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0ZXh0ID8gU3RyaW5nKHRleHQpLnJlcGxhY2UoL14oXFxkezJ9KShcXGR7M30pKFxcZHszfSkoXFxkezF9KS8sIFwiJDEuJDIuJDMtJDRcIikgOiAnJztcbiAgICAgIH07XG4gICAgfV0pXG5cbiAgICAuZmlsdGVyKCd0ZWxlZm9uZScsIFtmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQgPyBTdHJpbmcodGV4dCkucmVwbGFjZSgvXihcXGR7Mn0pKFxcZHs0LDV9KShcXGR7NH0pLywgXCIoJDEpICQyLSQzXCIpIDogJyc7XG4gICAgICB9O1xuICAgIH1dKVxuXG4gICAgLmZpbHRlcignY2VwJywgW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIHRleHQgPyBTdHJpbmcodGV4dCkucmVwbGFjZSgvXihcXGR7NX0pKFxcZHszfSkvLCBcIiQxLSQyXCIpIDogJyc7XG4gICAgICAgIH07XG4gICAgfV0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgYW5ndWxhci5tb2R1bGUoJ2JvbUNvbnRyb2xlJylcbiAgICAuZGlyZWN0aXZlKCdleGFtcGxlJywgW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgICAgICAgc2NvcGU6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGxpbms6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRjdHJsKSB7XG5cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfTtcbiAgICB9XSk7XG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgYW5ndWxhci5tb2R1bGUoJ2JvbUNvbnRyb2xlJylcbiAgICAuY29uc3RhbnQoJ2NvbmZpZycsIHtcbiAgICAgICAgQVBJX1VSTDogJydcbiAgICB9KVxuICAgIC5jb25maWcoWydOb3RpZmljYXRpb25Qcm92aWRlcicsIGZ1bmN0aW9uIChOb3RpZmljYXRpb25Qcm92aWRlcikge1xuICAgICAgICBOb3RpZmljYXRpb25Qcm92aWRlci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIHN0YXJ0VG9wOiA4MCxcbiAgICAgICAgICAgIG1heENvdW50OiA1LFxuICAgICAgICB9KTtcbiAgICB9XSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGFuZ3VsYXIubW9kdWxlKCdib21Db250cm9sZScpXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgJyRjb250cm9sbGVyUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIsICRjb250cm9sbGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG5cbiAgICAgICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86ICcvJyB9KTtcblxuICAgICAgJGNvbnRyb2xsZXJQcm92aWRlci5hbGxvd0dsb2JhbHMoKTtcbiAgICAgICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJycpO1xuXG4gICAgfV0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBhbmd1bGFyLm1vZHVsZSgnYm9tQ29udHJvbGUnKS5ydW4oWyckcm9vdFNjb3BlJywgZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcblxuICAgICRyb290U2NvcGUuJG9uKCckcm91dGVDaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0pO1xuXG4gIH1dKTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdib21Db250cm9sZScpXG4gICAgICAgIC5jb250cm9sbGVyKCdjcmVhdGVVc2VyQ29udHJvbGxlcicsIFtmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICB9XSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBhbmd1bGFyLm1vZHVsZSgnYm9tQ29udHJvbGUnKVxuICAgICAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcblxuICAgICAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAgICAgLndoZW4oJy9jcmVhdGUtdXNlcicsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9jcmVhdGVVc2VyL2NyZWF0ZVVzZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2NyZWF0ZVVzZXJDb250cm9sbGVyJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfV0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgYW5ndWxhci5tb2R1bGUoJ2JvbUNvbnRyb2xlJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ3Rlc3RGcm9udEVuZENvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJHNjb3BlLnRlc3RGcm9udEVuZCA9IFwiVGVzdGUgRnJvbnQtRW5kXCI7XG5cbiAgICAgICAgfV0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgYW5ndWxhci5tb2R1bGUoJ2JvbUNvbnRyb2xlJylcbiAgICAgICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG5cbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC53aGVuKCcvJywge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL3Rlc3RlRnJvbnRFbmQvdGVzdEZyb250RW5kLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICd0ZXN0RnJvbnRFbmRDb250cm9sbGVyJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfV0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgYW5ndWxhci5tb2R1bGUoJ2JvbUNvbnRyb2xlJylcbiAgICAgICAgLmZhY3RvcnkoJ3VzZXJIdHRwU2VydmljZXMnLCBbJyRodHRwJywgJ2NvbmZpZycsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gICAgICAgICAgICB2YXIgX2dldFVzZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ3VzZXJzLmpzb24nLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXRVc2VyczogX2dldFVzZXJzXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1dKTtcblxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdib21Db250cm9sZScpXG4gICAgICAgIC5mYWN0b3J5KCdleGFtcGxlVXRpbFNlcnZpY2UnLCBbZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgX2ZhekFsZ28gPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmF6QWxnbzogX2ZhekFsZ29cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfV0pO1xufSkoKTsiXX0=
