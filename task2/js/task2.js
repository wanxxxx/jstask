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

function checkField() { //修改事件
    var val = document.getElementById('player').value;
    if (val >= 6 && val <= 18) {
        killer.value = 1;
    }
    if (val >= 6 && val <= 8) {
        killer.value = 1;
        civilian.value = val - killer.value
    } else if (val >= 9 && val <= 11) {
        killer.value = 2;
        civilian.value = val - killer.value
    } else if (val >= 12 && val <= 15) {
        killer.value = 3;
        civilian.value = val - killer.value
    } else if (val >= 16 && val <= 18) {
        killer.value = 4;
        civilian.value = val - killer.value
    } else {
        alert("请输入正确数字")
    }
    var arr2 = new Array(val); //1-N玩家的集合
    var arr1 = arra(val);
    for (i = 0; i < val; i++) { //全赋予平民
        arr2[i] = "平民";
    }
    for (i = 0; i < killer.value; i++) { //随机赋予杀手
        arr2[arr1[i]] = "杀手";
    }
    return arr2;
}

function fapai() { //存入数据
    var data = checkField(); //这是一个数组
    var send = JSON.stringify(data); //转换为字符串
    sessionStorage.data = send; //存入
    
    window.location.href = "task3.html"
    sessionStorage.setItem('daynum', 1);
sessionStorage.setItem('checknum', 0);
}


