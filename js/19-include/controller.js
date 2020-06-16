
// adds a controller
app.controller('includeController', function ($scope) {
   $scope.tableHtmlLink = '19-02-table.html';
   $scope.characters = [
       { name: 'Joseph Joestar', age: 19 },
       { name: 'Wham', age: 10000 },
       { name: 'Lisa Lisa', age: 50 },
       { name: 'Loggins', age: 38 },
   ];

   $scope.w3schoolsLink = 'https://tryit.w3schools.com/angular_include.php';
});