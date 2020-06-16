
// adds a controller
app.controller ('formController', function ($scope) {
    $scope.form = {
        name: '',
        age: '',
        country: '',
        haveCar: false,
        maritalStatus: ''
    };

    $scope.countries = ['Brazil', 'US', 'Canada', 'France', 'Italy'];
});