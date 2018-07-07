var msg = sessionStorage.getItem("data").split(",");
console.info(msg);

function back() {
    window.location.href = 'task3.html';
}

function end() {
    window.location.href = 'task3.html';
}

function abc() {
    window.location.href = 'task4-2-2.html';
}
$("#btn1").click(function() {
    window.location.href = 'task4-2result.html';
});
//根据人数动态生成
for (i = 0; i < msg.length; i++) {
    if (i < msg.length) { //插入div
        var div = document.getElementById('div');
        var newdiv = document.createElement("div")
        div.appendChild(newdiv);
        newdiv.className = 'main-div-div';
        if (i < msg.length) { //插入input、img
            var newinput1 = document.createElement("input");
            var newinput2 = document.createElement("input");
            var newimg = document.createElement('img');
            newinput1.className = 'choose1';
            newinput2.className = 'choose2';
            newimg.className = 'img';
            var divdiv = document.getElementsByClassName("main-div-div")
            divdiv[i].appendChild(newinput1);
            divdiv[i].appendChild(newinput2);
            divdiv[i].appendChild(newimg);
            $("img").attr("src", "img/kill.png");
        }
    }
}

$(".main-div-div").click(function(){
  $(".img").show();
});
//input动态放入名称号码
for (i = 0; i < msg.length; i++) {
    var input1 = document.getElementsByClassName("choose1")
    var input2 = document.getElementsByClassName("choose2")
    input1[i].value = msg[i];
    input2[i].value = i + 1 + "号";
}
$(".main-div-div").click(function() {
    newimg.style.visibility = "visible";
})
//状态机
var fsm = new StateMachine({
    init: '1',
    transitions: [{
        name: 'kill',
        from: '1',
        to: '2'
    }, {
        name: 'lastwords',
        from: '2',
        to: '3'
    }, {
        name: 'allspeak',
        from: '3',
        to: '4'
    }],
    method: {}
})
//调用状态机