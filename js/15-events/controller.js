
// adds a controller
app.controller ('eventsController', function ($scope) {
    $scope.count = 0;
    $scope.incrementCount = function () {
        $scope.count++;
    }
    $scope.printCoordinates = function (object) {
        $scope.x = object.clientX;
        $scope.y = object.clientY;
    };
});