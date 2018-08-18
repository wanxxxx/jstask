function back() {
    window.location.href = 'task1.html';
}

function arra(m) { //1-m的随机排列数组
    var arr = new Array(m);
    arr[0] = 0;
    for (var i = 1; i < m; i++) {
        var rnd = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[rnd];
        arr[rnd] = i;
    }
    return arr;
}
var range = document.getElementById('range')
var img = document.getElementsByClassName('img')
var player = document.getElementById('player')
//------------------加减符号
img[0].onclick = function() {
    range.value--;
    player.value = range.value;
    change()
}
img[1].onclick = function() {
    range.value++;
    player.value = range.value;
    change()
}
//------------------滑动条
function change() {
    var killer;
    var civi;
    console.log(player.value)
    player.value = range.value;
    if (player.value >= 4 && player.value <= 8) {
        killer = 1;
    } else if (player.value >= 9 && player.value <= 11) {
        killer = 2;
    } else if (player.value >= 12 && player.value <= 15) {
        killer = 3;
    } else if (player.value >= 16 && player.value <= 18) {
        killer = 4;
    } else {
        killer = ' ';
    }
    sessionStorage.setItem('killernum', killer);
    var msg = []; //1-N玩家的集合
    var arr1 = arra(player.value);
    for (i = 0; i < player.value; i++) { //全赋予平民
        msg[i] = "平民";
    }
    for (i = 0; i < killer; i++) { //随机赋予杀手
        msg[arr1[i]] = "杀手";
    }
    sessionStorage.msg = JSON.stringify(msg);
    $('#player1').text('杀手' + killer + '人');
    $('#player2').text('平民' + (player.value - killer) + '人');
}
//------------------发牌
function fapai() {
    if (player.value > 3 && player.value < 19) {
        window.location.href = "task3.html";
        sessionStorage.setItem('daynum', 1);
        sessionStorage.setItem('checknum', 0);
    } else {
        alert("请输入正确数字")
    }
}