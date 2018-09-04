myApp.controller("add", function ($scope, $http, $state, $stateParams, Upload) {

    $scope.types = [{
        id: null,
        typename: '请选择'
    }, {
        id: 0,
        typename: '首页banner'
    }, {
        id: 1,
        typename: '找职位banner'
    }, {
        id: 2,
        typename: '找精英banner'
    }, {
        id: 3,
        typename: '行业大图'
    }];



    $scope.type = $scope.types[0].id;

    
    $scope.industries = [{
            id: null,
            industryname: '请选择'
        }, {
            id: 0,
            industryname: '移动互联网'
        },
        {
            id: 1,
            industryname: '电子商务'
        },
        {
            id: 2,
            industryname: '企业服务'
        },
        {
            id: 3,
            industryname: 'O2O'
        },
        {
            id: 4,
            industryname: '游戏'
        }
    ]

    $scope.industry = $scope.industries[0].id;

  
    // 编辑
    if ($stateParams.id) {
        $scope.listTitle = "编辑Article";
  
        // 编辑渲染数据
        $http({
            method: 'get',
            url: '/carrots-admin-ajax/a/article/' + $stateParams.id,
        }).then(function (result) {
            var singleList = result.data.data.article;
            $scope.title = singleList.title;
            $scope.type = singleList.type;
            $scope.htmltext = singleList.content;
            $scope.link = singleList.url;
            $scope.img_view = singleList.img;
            $scope.createAt = singleList.createAt;
            $scope.industry = singleList.industry;
            //把content的内容放入富文本编辑器中去
            var hltxt = $scope.htmltext;
            editor.txt.text(hltxt);
         
        })

        // 编辑的上线
        $scope.online = function () {
            if ($scope.title = "" || $scope.type === undefined || $scope.img_view === undefined || $scope.link === undefined) {
                alert("图片没有上传！")
            } else {
                //把富文本编辑器中的文本提取出来
                var edtxt = editor.txt.text();
                $http({
                    method: 'put',
                    url: '/carrots-admin-ajax/a/u/article/' + $stateParams.id,
                    params: {
                        title: $scope.title,
                        type: $scope.type,
                        status: 2,
                        img: $scope.img_view,
                        //上传的content等于富文本编辑器中的内容
                        content: edtxt,
                        url: $scope.link,
                        createAt: $scope.createAt,
                        // industry: $scope.industry
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (resp) {
                    console.log("上传成功");
                    if (resp.data.code === 0) {
                        $state.go('backstage.list');
                    }
                })
            }
        }
        // 编辑的存为草稿
        $scope.save = function () {
            if ($scope.title = undefined  || $scope.type === undefined || $scope.img_view === undefined || $scope.link === undefined) {
                alert("图片没有上传！")
            } else {
                //把富文本编辑器中的文本提取出来
                var edtxt = editor.txt.text();
                $http({
                    method: 'put',
                    url: '/carrots-admin-ajax/a/u/article/' + $stateParams.id,
                    params: {
                        title: $scope.title,
                        type: $scope.type,
                        status: 1,
                        img: $scope.img_view,
                        content: edtxt,
                        url: $scope.link,
                        createAt: $scope.createAt,
                        // industry: $scope.industry
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (resp) {
                    console.log(resp);
                    if (resp.data.code === 0) {
                        $state.go('backstage.list');
                    }
                })
            }
        }

    }

    // 新增
    else {
        $scope.listTitle = "新增Article";
        // 新增的立即上线
     
        $scope.online = function () {
            if ($scope.title === undefined||$scope.type === undefined || $scope.img_view === undefined || $scope.link === undefined) {
                alert("图片没有上传！")
                
            } else {

                //把富文本编辑器中的文本提取出来
                var edtxt = editor.txt.text();
                $http({
                    method: 'post',
                    url: '/carrots-admin-ajax/a/u/article/',
                    params: {
                        title: $scope.title,
                        type: $scope.type,
                        status: 2,
                        img: $scope.img_view,
                        content: edtxt,
                        url: $scope.link,
                        // industry: $scope.industry
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (resp) {
                    console.log(resp);
                    if (resp.data.code === 0) {
                        $state.go('backstage.list');
                    }
                })
            }
        }
        // 新增的存为草稿
        $scope.save = function () {
            if ($scope.title === undefined ||$scope.type === undefined || $scope.img_view === undefined || $scope.link === undefined) {
                alert("图片没有上传！")
            } else {
                //把富文本编辑器中的文本提取出来
                var edtxt = editor.txt.text();
                $http({
                    method: 'post',
                    url: '/carrots-admin-ajax/a/u/article/',
                    params: {
                        title: $scope.title,
                        type: $scope.type,
                        status: 1,
                        img: $scope.img_view,
                        content: edtxt,
                        url: $scope.link,
                        // industry: $scope.industry
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (resp) {
                    console.log(resp);
                    if (resp.data.code === 0) {
                        $state.go('backstage.list');
                    }
                })
            }
        }
    }
    //使用了第三方插件ng-file-upload上传图片

    $scope.imgUpload = function (file) {
        file.upload = Upload.upload({
            url: '/carrots-admin-ajax/a/u/img/task',
            data: {
                file: $scope.myFiles //把选中的图片命名为file上传
            },
        });
        // 请求成功后，获取返回的url，然后缩略图展示
        file.upload.then(function (rsp) {
            console.log(rsp);
            $scope.img_view = rsp.data.data.url; //返回的图片url
            $scope.ok = "搞定啦！";
        }, function (rsp) {
            alert(rsp.data.message);
        }, function (evt) {
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            console.log("图片上传成功！");
        });
    };
    
    // 图片上传后删除，清空页面内所有参数
    $scope.imgDelete = function (file) {
        editor.txt.clear();
        $scope.myFiles = "";
        $scope.src = "";
        $scope.img_view = "";
        $scope.title = "",
        $scope.link = "",
        $scope.type = $scope.types[0].id;
        $scope.industry = $scope.industries[0].id;
    };

    //取消,回到上一个页面
    $scope.cancel = function () {
        $state.go('backstage.list');
    }


 


});