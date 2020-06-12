
// creates a module
var myApp = angular.module ('myApp', []);

var bands = [
    { name: 'Megadeth', genre: 'Thrash Metal', year: 1983 },
    { name: 'Thin Lizzy', genre: 'Hard Rock', year: 1969 },
    { name: 'Duran Duran', genre: 'New Wave', year: 1978 }
];

// adds a controller
myApp.controller ('myController', function ($scope) {
    $scope.band = bands[0];
    var currentIndex = 0;

    $scope.previousBand = function (){
        currentIndex--;
        currentIndex = (currentIndex < 0 ? bands.length - 1 : currentIndex);
        $scope.band = bands[currentIndex];
    };

    $scope.nextBand = function (){
        currentIndex++;
        currentIndex = (currentIndex >= bands.length ? 0 : currentIndex);
        $scope.band = bands[currentIndex];
    };
});