
// adds a controller

app.controller ('locationController', function ($scope, $location) {
    $scope.currentUrl = $location.absUrl ();
});

app.controller ('httpController', function ($scope, $http) {
    $http.get ('../mock/sono-chi-no-sadame.txt').then (function (response){
        $scope.content = response.data;
    });
});

// $timeout / $interval
app.controller ('intervalController', function ($scope, $interval) {
    var counter = 0;
    $interval (function (){
        counter++;
        $scope.currentCounter = counter;
    }, 100);
});

app.controller ('customController', function ($scope, myService) {
    $scope.content = myService.getCurrentPhrase ();
});