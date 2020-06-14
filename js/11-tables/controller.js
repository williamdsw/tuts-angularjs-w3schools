
// adds a controller
app.controller ('tableController', function ($scope, $http) {
    $scope.content = '';
    $scope.orderByField = 'position';
    $scope.filterText = '';

    $scope.loadData = function (){
        makeRequest ('../mock/premier-league-classification.json', $scope, $http)
    }
});

function makeRequest (url, $scope, $http) {
    $http ({
        method: 'GET',
        url: url,
    }).then (function success (response) {

        console.log ('response', response);

        $scope.content = response.data;
        console.log ('content', $scope.content);

    }, function error (err) {

        console.log ('err', err);
        $scope.content = err.data;

    });
}