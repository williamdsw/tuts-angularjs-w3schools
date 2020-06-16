
// creates a application
var app = angular.module ('app', []);
app.config (function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist ([
        'https://tryit.w3schools.com/**',
        'http://localhost/**', 'http://127.0.0.1:5500/**'
    ]);
});