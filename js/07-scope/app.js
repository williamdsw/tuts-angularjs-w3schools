
// creates a application
var app = angular.module ('app', []);
app.run (function ($rootScope) {
    $rootScope.backgroundColor = 'blue';
    $rootScope.color = 'lightblue';
});