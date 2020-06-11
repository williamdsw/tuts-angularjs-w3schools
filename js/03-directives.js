
// creates a module
var myApp = angular.module ('myApp', []);

// adds a controller
myApp.controller ('myController', function ($scope) {
    $scope.quantity = 1;
    $scope.price = 59.99;
    $scope.bandMembers = ['Ozzy', 'Tony', 'Geeze', 'Bill'];
    $scope.countries = [
        { name: 'Brazil', currency: 'BRL' },
        { name: 'USA', currency: 'U$$' },
        { name: 'Argentina', currency: 'ARS' },
    ];
});

myApp.directive ('thembones', function (){
    return {
        restrict: 'A', // restrict by Attribute
        template: `I feel so alone gonna end up a big ole a pile of them bones!` 
    };
});
