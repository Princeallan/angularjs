//Boostrapping
var app = angular.module('firstApp',  ['ngRoute']);

//Templating and routes
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

    when('/addEmployee', {
        templateUrl: 'addEmployee.html',
        controller: 'AddEmployeeController'
    }).

    when('/viewEmployees', {
        templateUrl: 'viewEmployees.html',
        controller: 'ViewEmployeeController'
    }).

    when('/', {
        templateUrl: 'index-2.html',
        controller: 'appController'
    }).

    otherwise({
        redirectTo: '/'
    });
}]);

//controllers and scope (show better use of scope)
app.controller('appController', function($scope) {
    $scope.name = "eg Mondo Ride";
});

app.controller('AddEmployeeController', function($scope) {
    $scope.message = "This page will be used to display add student form";
});

app.controller('ViewEmployeeController', function($scope) {
    $scope.message = "This page will be used to display all the students";
});

//Custom filters