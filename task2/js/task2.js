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
//------------------1
function change() {
    player.value = range.value;
    if (player.value >= 4 && player.value <= 8) {
        killer.value = 1;
        civilian.value = player.value - killer.value
    } else if (player.value >= 9 && player.value <= 11) {
        killer.value = 2;
        civilian.value = player.value - killer.value
    } else if (player.value >= 12 && player.value <= 15) {
        killer.value = 3;
        civilian.value = player.value - killer.value
    } else if (player.value >= 16 && player.value <= 18) {
        killer.value = 4;
        civilian.value = player.value - killer.value
    } else {
        killer.value = ' ';
        civilian.value = ' ';
    }
    sessionStorage.setItem('killernum', killer.value);
    player.value = range.value;
    var msg = []; //1-N玩家的集合
    var arr1 = arra(player.value);
    for (i = 0; i < player.value; i++) { //全赋予平民
        msg[i] = "平民";
    }
    for (i = 0; i < killer.value; i++) { //随机赋予杀手
        msg[arr1[i]] = "杀手";
    }
    sessionStorage.msg = JSON.stringify(msg);
    console.log(msg.length)
}

function fapai() { //存入数据
    if (player.value > 3 && player.value < 19) {
        window.location.href = "task3.html";
        sessionStorage.setItem('daynum', 1);
        sessionStorage.setItem('checknum', 0);
    } else {
        alert("请输入正确数字")
    }
}