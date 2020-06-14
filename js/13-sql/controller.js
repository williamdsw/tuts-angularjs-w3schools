
// adds a controller
app.controller ('sqlController', function ($scope, $http) {
    $scope.content = '';

    $scope.loadData = function (){
        makeRequest ('http://localhost/angularjs/select-users.php', $scope, $http)
    }
});

function makeRequest (url, $scope, $http) {
    $http.get (url).then (function success (response) {

        console.log ('response', response);

        $scope.content = response.data;
        console.log ('content', $scope.content);

    }, function error (err) {

        console.log ('err', err);
        $scope.content = err.data;

    });
}