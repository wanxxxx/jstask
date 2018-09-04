//自定义服务，封装了三个下拉框的选项选择
myApp.factory("ListStyle", function () {
    return {
        // status 下拉框
        status: [{
            id: "",
            name: '全部'
        }, {
            id: 1,
            name: '草稿'
        }, {
            id: 2,
            name: '上线'
        }],


        // 页面类型
        select: [{
            id: "",
            name: "请选择"
        }, {
            id: 0,
            name: "首页banner"
        }, {
            id: 1,
            name: "找职位banner"
        }, {
            id: 2,
            name: "找精英banner"
        }, {
            id: 3,
            name: "行业大图"
        }],

        // 当类型为行业大图的时候，显示下面的select     
        industry: [{
            id: "",
            name: "请选择"
        }, {
            id: 0,
            name: "移动互联网"
        }, {
            id: 1,
            name: "电子商务"
        }, {
            id: 2,
            name: "企业服务"
        }, {
            id: 3,
            name: "O2O"
        }, {
            id: 4,
            name: "教育"
        }, {
            id: 5,
            name: "金融"
        }, {
            id: 6,
            name: "游戏"
        }]
    }
})