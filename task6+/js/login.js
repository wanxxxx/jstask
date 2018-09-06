app.controller("login", function ($scope, $http, $state) {
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
            }
        }).then(function (xhr) {
            if (xhr.data.code === 0) {
                $state.go("dashboard");
            } else {
                $scope.msg = xhr.data.message;
            }
        })
    }
})

