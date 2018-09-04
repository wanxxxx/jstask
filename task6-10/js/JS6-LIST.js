myApp.controller("list", function ($scope, $http, $state, $stateParams, ListStyle) {
    //日历选择器
    $scope.dat = new Date();
    $scope.format = "yyyy/MM/dd";
    $scope.altInputFormats = ['yyyy/M!/d!'];

    // 取消周末选项
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return (mode === 'day' && false);
    }
    //设置最大可选择时间
    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 1, 1),
        minDate: new Date(),
        startingDay: 1
    };
    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };
    $scope.popup1 = {
        opened: false
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.popup2 = {
        opened: false
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };


    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
        return '';
    }


    //搜索框的类型

    $scope.TypeName = ListStyle.select; //从ListStyle获取到下拉框，填充到网页的下拉框选项中
    $scope.StatusName = ListStyle.status;
    $scope.type = ListStyle.select[0].id; //获取从网页选择的下拉框选项，转换为服务器请求参数，传参
    $scope.status = ListStyle.status[0].id;


    //服务器请求列表
    $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search',
        params: {
            //传参，把网页获取的页码传递给服务器
            //传参是一个点，需要在路由中设置传参的参数，否则GG
            page: $stateParams.page,
            type: $stateParams.type,
            status: $stateParams.status,
            author: $stateParams.author,
            title: $stateParams.title,
            startAt: $stateParams.startAt,
            endAt: $stateParams.endAt,
            size: $stateParams.size
        }
    }).then(function (response) {
        $scope.size = response.data.data.size;
        $scope.list = response.data.data.articleList; //获取列表
        $scope.bigTotalItems = response.data.data.total; //列表总数
        $scope.currentPage = $stateParams.page; //服务器返回的页码列表 
        $scope.perpage = response.data.data.size;
        //容错处理，在第一次载入列表以及没有选择搜索的时候，清除所有搜索选项
        if (($stateParams.type) === undefined) {
            $scope.type = "";
        } else {
            $scope.type = parseInt($stateParams.type);
        }
        if ($stateParams.status === undefined) {
            $scope.status = "";
        } else {
            $scope.status = parseInt($stateParams.status);
        }
        if ($stateParams.title === undefined) {
            $scope.title = "";
        } else {
            $scope.title = $stateParams.title;
        }
        if ($stateParams.author === undefined) {
            $scope.author = "";
        } else {
            $scope.author = $stateParams.author;
        }

        if ($stateParams.startAt) {
            $scope.startday = parseInt($stateParams.startAt);

        }
        if ($stateParams.endAt) {
            $scope.endday = parseInt($stateParams.endAt);
        }

    });
    // 上下线状态显示
    $scope.btnStatus = function () {
        if (this.x.status === 1) {
            return "上线";
        } else {
            return "下线";
        }
    }

    // 上下线状态改变
    $scope.updown = function (id) {
        var id = this.x.id;
        // 草稿改变
        if (this.x.status === 1) {
            bootbox.confirm({ //要用这个弹窗需要引用bootbox.js和bootstrap.js,不然报错
                message: "确定要上线？",
                buttons: {
                    confirm: {
                        label: '确认',

                    },
                    cancel: {
                        label: '取消',

                    }
                },
                callback: function (result) {
                    if (result) {
                        // console.log('This was logged in the callback: ' + result);
                        $http({
                            method: 'put',
                            url: '/carrots-admin-ajax/a/u/article/status',
                            params: {
                                id: id,
                                status: 2
                            }
                        }).then(function () {
                            $state.go($state.current, {}, {
                                reload: true
                            })
                        })
                    }
                }
            });
        }

        // 上线改变 
        else {
            bootbox.confirm({
                message: "确定要转为草稿？",
                closeButton: false,
                buttons: {
                    confirm: {
                        label: '确认',

                    },
                    cancel: {
                        label: '取消',

                    }
                },
                callback: function (result) {
                    if (result) {
                        $http({
                            method: 'put',
                            url: '/carrots-admin-ajax/a/u/article/status',
                            params: {
                                id: id,
                                status: 1
                            }
                        }).then(function () {
                            $state.go($state.current, {}, {
                                reload: true
                            })
                        })
                    }
                }
            })
        }
    }


    // 编辑，通过id
    $scope.edit = function (id) {
        var id = this.x.id;
        $state.go("backstage.add", {
            id: id
        });
    }

    // 删除，同上
    $scope.delete = function (id) {
        var id = this.x.id;
        bootbox.confirm({
            message: "确定要删除？",
            closeButton: false,
            buttons: {
                confirm: {
                    label: '确认',

                },
                cancel: {
                    label: '取消',

                }
            },
            callback: function (result) {
                if (result) {
                    $http({
                        method: 'delete',
                        url: '/carrots-admin-ajax/a/u/article/' + id,
                        // 请求参数这样写
                    }).then(function () {
                        $state.go($state.current, {}, {
                            reload: true
                        })
                    })
                }
            }
        })
    }

    //页数显示为3
    $scope.maxSize = 3;
    //页面跳转
    $scope.page = function () {
        $state.go("backstage.list", {
            page: $scope.currentPage, //页面跳转到服务器返回的页码列表
            size: $scope.size
        }, {
            reload: true
        });
    }
    //跳转到第几页和每页展示几行
    $scope.letgo = function () {
        $state.go("backstage.list", {
            page: $scope.gotopage, //页面跳转到服务器返回的页码列表
            size: $scope.size

        }, {
            reload: true
        });
    }

    //搜索，传参
    $scope.search = function () {

        var time1, time2;

        if ($scope.startday) {
            var date1 = new Date($scope.startday);
            time1 = date1.valueOf();
            console.log("第一个时间" + time1);
        }
        if ($scope.endday) {
            var date2 = new Date($scope.endday);
            // 想判断第二天如果没填怎么传
            if (time1 !== date2.valueOf()) {
                time2 = date2.valueOf();
            } else {
                time2 = date1.valueOf() + 86399000;
            }
            console.log(time2);
        }
        $state.go("backstage.list", {
            status: $scope.status,
            type: $scope.type,
            author: $scope.author,
            title: $scope.title,
            startAt: time1,
            endAt: time2

        }, {
            reload: true
        });

    }
    //清除，把所有参数清除
    $scope.clear = function () {
        $state.go("backstage.list", {
            type: "",
            status: null,
            startAt: null,
            endAt: null,
            author: null,
            title: null
        }, {
            reload: true
        })
    }

})