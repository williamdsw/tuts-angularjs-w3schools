
// adds a controller
app.controller('angularAPIController', function ($scope) {
    $scope.text = '';
    $scope.textTransform = function () {
        if ($scope.text !== '' && $scope.text.length !== 0) {
            console.log ('angular API', angular);
            $scope.textLowercase = angular.lowercase ($scope.text);
            $scope.textUppercase = angular.uppercase ($scope.text);
            $scope.textIsString = angular.isString ($scope.text);
            if (!isNaN (Number.parseFloat ($scope.text))) {
                $scope.textIsNumber = angular.isNumber (Number.parseFloat ($scope.text));
            }
            else {
                $scope.textIsNumber = false;
            }
        }
    };
});