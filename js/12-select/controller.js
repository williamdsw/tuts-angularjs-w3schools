
// adds a controller
app.controller ('selectController', function ($scope) {
    $scope.currentGenre = '';
    $scope.genres = [
        'Heavy Metal', 'Hard Rock', 'Punk Rock', 'Glam Metal', 'Funk',
        'New Wave', 'Jazz', 'R&B', 'Classic Rock', 'Progressive Rock',
        'Djent'
    ];

    $scope.currentConsole = '';
    $scope.consoles = [
        { name: 'PlayStation', developer: 'Sony', year: 1994 },
        { name: 'Xbox', developer: 'Microsoft', year: 2003 },
        { name: 'Super Nintendo', developer: 'Nintendo', year: 1990 },
        { name: 'Dreamcast', developer: 'Sega', year: 1998 },
    ];
});