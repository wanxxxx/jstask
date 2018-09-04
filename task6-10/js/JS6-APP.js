var myApp = angular.module("myApp", ['ui.router','ngAnimate', 'ngSanitize', 'ngMessages','ui.bootstrap','ngFileUpload']);
// var myApp = angular.module("myApp", [&apos;ui.router&apos;]);
// 这里叫做App模块，这将告诉HTML页面这是一个AngularJS作用的页面，它的内容由AngularJS引擎来解释。&apos引号作用'',区分
// 路由
myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // 清除感叹号
    $locationProvider.hashPrefix('');
    //更改url格式配置为html5，去掉#号,这个没用
    $locationProvider.html5Mode({
        enable: true,
        requireBase: false
    });
    // 默认导入页面
    $urlRouterProvider.otherwise("login");
    // 这一行定义了会在main.html页面第一个显示出来的状态，作为页面被加载好以后第一个被使用的路由.
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "JS6-LOGIN.html",
            controller: "login"
        })
        .state("backstage", {
            url: "/backstage",
            templateUrl: "JS6-BACK.html"
        })
        .state("backstage.list", {
            //Article列表页+++
            url: '/list?page$status$type$startAt$endAt$author$title$size',
            templateUrl: "JS6-LIST.html",
            controller: "list"
        })
        .state("backstage.add", {
            //列表编辑页面
            url: '/add?id',
            templateUrl: "JS6-ADD.html",
            controller: "add"
        })
        /*一个测试页面
        .state("backstage.demo", {
            //Article列表页+++
            url: '/demo?page$status$type$startAt$endAt$author$title',
            templateUrl: "demo2.html",
            controller: "demo"
        })*/
});