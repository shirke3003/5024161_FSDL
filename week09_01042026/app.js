var app = angular.module("helloApp", []);

app.controller("helloController", function($scope) {
    $scope.student = {
        name: "",
        roll: "",
        branch: ""
    };
});