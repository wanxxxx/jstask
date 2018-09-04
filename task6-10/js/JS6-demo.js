myApp.controller("demo", function ($scope, $http,$state, $stateParams) {
    $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search',
        params: {
            page: $stateParams.page,
        }
    }).then(function(response) {
        $scope.item = response.data.data.articleList;
        $scope.bigTotalItems = response.data.data.total;
        $scope.currentPage = $stateParams.page;
        $scope.size = response.data.data.size;
    });
    $scope.maxSize = 3;
    $scope.page = function () {
        $state.go("backstage.demo", {
            page: $scope.currentPage
        }, {
            reload: true
        });
    }
})