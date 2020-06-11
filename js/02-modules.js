
// creates a module
var myApp = angular.module ('myApp', []);

// adds a controller
myApp.controller ('myController', function ($scope) {
    $scope.firstName = 'Ronnie';
    $scope.middleName = 'James';
    $scope.lastName = 'Dio';
});

// adds a directive
myApp.directive ('roundabout', function (){
    return {
        template: `I'll be the roundabout, the one who makes you out 'n' out` 
    };
});