
// creates a module
var myApp = angular.module ('myApp', []);

// adds a controller
myApp.controller ('myController', function ($scope) {
    $scope.name = 'Marty Friedman';
    $scope.userEmail = 'marty@megadeth.com';
});