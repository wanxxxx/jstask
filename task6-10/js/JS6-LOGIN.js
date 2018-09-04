myApp.controller("login", function ($scope, $http, $state) {
    //控制器名称login,来自于JS6-APP.JS
    $scope.login = function () {
        $http({
            method: "POST",
            url: '/carrots-admin-ajax/a/login',
            params: {
                name: $scope.user,
                pwd: $scope.pwd
            },
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } //表头
        }).then(function (xhr) {
            if (xhr.data.code === 0) {
                $state.go("backstage");
            } else {
                $scope.login_info = xhr.data.message;
            }
        })
    }
})

