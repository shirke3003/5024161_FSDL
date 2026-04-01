var app = angular.module("studentApp", []);

app.controller("studentController", function($scope){

    $scope.students = [];

    $scope.addStudent = function(){

        if($scope.studentForm.$valid){
            $scope.students.push($scope.student);
            $scope.student = {};
        }

    };

});