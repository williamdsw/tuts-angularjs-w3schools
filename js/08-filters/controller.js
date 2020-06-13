
// adds a controller
app.controller ('controller', function ($scope) {
    $scope.phrase = "I'll be the roundabout. The one who makes you out 'n' out";
    $scope.teams = [
        { position: 1, name: 'Liverpool', country: 'England' },
        { position: 2, name: 'Flamengo', country: 'Brazil' },
        { position: 3, name: 'Monterrey', country: 'Mexico' },
        { position: 4, name: 'Al-Hilal', country: 'Saudi Arabia' },
        { position: 5, name: 'Espérance Sportive de Tunis ', country: 'Tunisia' },
        { position: 6, name: 'Al-Saad', country: 'Qatar' },
        { position: 7, name: 'Hienghène Sport', country: 'New Caledonia ' }
    ];
    $scope.price = 0;
    $scope.names = [
        'Jonathan', 'Joseph', 'Jotaro', 'Dio', 'Zeppeli', 'Cars', 'Wham', 'Lisa Lisa'
    ];
    $scope.textFilter = '';
});