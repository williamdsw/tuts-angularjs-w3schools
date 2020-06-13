
// adds a controller
app.controller ('httpController', function ($scope, $http) {
    $scope.content = '';
    $scope.statusCode = '';
    $scope.statusText = '';
    $scope.headers = '';

    // $http.post ('url').then (response, error);
    // $http.put ('url').then (response, error);
    // $http.delete ('url').then (response, error);
    $scope.getLyrics = function (){
        makeRequest ('../mock/sono-chi-no-sadame.txt', $scope, $http)
    }

    $scope.getWrongLyrics = function () { 
        makeRequest ('wrong.txt', $scope, $http); 
    }
});

function makeRequest (url, $scope, $http) {
    $http ({
        method: 'GET',
        url: url,
    }).then (function success (response) {

        console.log ('response', response);

        $scope.content = response.data;
        $scope.statusCode = response.status;
        $scope.statusText = response.statusText;
        $scope.headers = response.config.headers;

    }, function error (err) {

        console.log ('err', err);
        $scope.content = err.data;
        $scope.statusCode = err.status;
        $scope.statusText = err.statusText;
        $scope.headers = err.config.headers;

    });
}