'use strict';

angular.module('startupApp')

/*.constant("messagesURL", "/messages")*/

    .controller('DashboardCtrl', ['$scope', function ($scope) {
        $scope.heloMsg = "Dashboard";
        $scope.subtitle = "This is a boilerplate Angular App which contains: AngularJS, Bootstrap, Gulp, Sass, BrowserSync, Feather Icons, Sweet Alert"
        
        
        $scope.boom = function () {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!"
            });
        }
    }])

    .controller('ProdCtrl', ['$scope', function ($scope) {
        $scope.heloMsg = "Products Page";
        $scope.subtitle = "This is a boilerplate Angular App which contains: AngularJS, Bootstrap, Gulp, Sass, BrowserSync"
    }])

;