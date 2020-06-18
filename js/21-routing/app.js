
// creates a application
var app = angular.module ('app', ['ngRoute']);
app.config (function ($routeProvider) {
    var urls = ['/second', '/third'];
    var templateUrls = ['21-2-second-page.html', '21-3-third-page.html'];

    for (var index = 0; index < urls.length; index++) {
        $routeProvider.when (urls[index], { templateUrl: templateUrls[index] });
    }
});
