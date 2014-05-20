

var app = angular.module('Dream',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.otherwise({redirectTo:'/'});
    $routeProvider.when('/',{templateUrl:'resources/html/welcome.html'});
    $routeProvider.when('/intro',{controller:'projectController',templateUrl:'resources/html/project_intro.html'});
    $routeProvider.when('/project',{templateUrl:'resources/html/project_con.html'});
    $routeProvider.when('/artist',{templateUrl:'resources/html/people.html'});
    $routeProvider.when('/building',{templateUrl:'resources/html/building.html'});
    $routeProvider.when('/env',{templateUrl:'resources/html/outer.html'});
    $routeProvider.when('/mange',{templateUrl:'resources/html/inner.html'});
    $routeProvider.when('/activity',{templateUrl:'resources/html/activity.html'});
    $routeProvider.when('/booking',{templateUrl:'resources/html/booking.html'});
    $routeProvider.when('/company',{templateUrl:'resources/html/company.html'});
}]);


