var app = angular.module('app',['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.when("", "/login");
        $stateProvider
        .state('login',{
            url:'/login',
            templateUrl:'login.html'
        })
        .state('dashboard',{
            url:'/dashboard',
            templateUrl:'dashboard.html'
        })
        .state('home.article',{
            url:'/article',
            templateUrl:'html/article.html'
        })
        .state('home.increase',{
            url:'/increase',
            templateUrl:'html/increase.html'
        });
    }]);