myApp.filter("StatusName", function () {
        return function (status) {
            var statusName = "";

            if (status == "1") {
                statusName = "草稿";
            }
            if (status == "2") {
                statusName = "上线";
            }
            return statusName;
        }
    })

    // 页面类型
    .filter('TypeName', function () {
        return function (type) {
            switch (type) {
                case 0:
                    return '首页banner';
                case 1:
                    return '找职位banner';
                case 2:
                    return '找精英banner';
                case 3:
                    return '行业大图';
            }
        }
    })

    // 状态
    .filter('StatusName', function () {
        return function (status) {
            switch (status) {
                case 1:
                    return '草稿';
                case 2:
                    return '上线';
            }
        }
    })