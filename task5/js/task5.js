$("form").on("submit", function() {
    var name = $('#name').text();
    var pwd = $('#pwd').text();
    $.ajax({
        type: 'POST',
        url: '/carrots-admin-ajax/a/login',
        data: $('#signin').serialize(),
        dataType: 'json',
        success: function(data) {
            if (data.code === 0) {
                window.location.href = "http://dev.admin.carrots.ptteng.com/";
            } else {
                if (name === '' || pwd === '') {
                    $('#msg').text('请输入用户名和密码');
                } else {
                    $('#msg').text(data.message);
                }
            }
        }
    })
    return false; //阻止表单默认提交行为
})