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
