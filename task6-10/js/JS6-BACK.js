// 左侧jQuery手风琴
myApp.controller("backstage", function ($http) {
    $(function () {//当页面重新加载时
        if (localStorage.getItem('xiabiao')) {//如果本地缓存有索引值，按照索引值把对应的list_dt展开
            $('.list_dd').stop();
            $(".list_dt").eq(localStorage.getItem('xiabiao')).attr("id", "open").next().slideDown().siblings("dd").slideUp();
        }
    })
    $(".list_dt").on("click", function () {
        $('.list_dd').stop();
        $(this).siblings("dt").removeAttr("id");
        if ($(this).attr("id") == "open") {
            $(this).removeAttr("id").siblings("dd").slideUp();
            localStorage.removeItem('xiabiao');//如果下拉菜单关闭了，就把本地缓存的索引值清除
        } else {
            $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
            var i = $(this).index(); //获取一级菜单的索引值
            var x = i/2;//HTML页面获取的list_dt的索引值有问题，取巧用了一个算法来解决
            localStorage.setItem('xiabiao', x);//把索引值存储到本地缓存
        }
    });
})