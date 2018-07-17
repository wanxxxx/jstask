var get = sessionStorage.data; //读取
var msg = JSON.parse(get); //重新转换为数组
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
    window.history.back(); 
});
//根据人数动态生成
for (i = 0; i < msg.length; i++) {
    if (i < msg.length) { //插入div
        var div = document.getElementById('div');
        var newdiv = document.createElement("div")
        div.appendChild(newdiv);
        newdiv.className = 'main-div-div';
        var divdiv = document.getElementsByClassName('main-div-div');
        var img = document.getElementsByClassName('img');
        if (i < msg.length) { //插入input、img
            var newinput1 = document.createElement("input");
            var newinput2 = document.createElement("input");
            var newimg = document.createElement('img');
            newinput1.className = 'choose1';
            newinput2.className = 'choose2';
            newimg.className = 'img';
            divdiv[i].appendChild(newinput1);
            divdiv[i].appendChild(newinput2);
            divdiv[i].appendChild(newimg);
            $("img").attr("src", "img/kill.png");
        }
        //在input内放入名称号码
        var input1 = document.getElementsByClassName("choose1")
        var input2 = document.getElementsByClassName("choose2")
        input1[i].value = msg[i];
        input2[i].value = i + 1 + "号";
        //杀人了
        divdiv[i].onclick = function() {
            var img = this.querySelector('.img');
            var name = this.querySelector('.choose1');
            $(".main-div-div img").attr('style', 'visibility = visible');
            img.style.visibility = 'visible';
            var deadnum = $('.main-div-div').index(this) + 1
            console.log("将杀死第" + deadnum + '人');
            
            $("#btn2").click(function() {
                if (name.value == "杀手") {
                    alert("你是杀手不能杀死本职业，请选择其他玩家杀死")
                } else {
                    var daynum = sessionStorage.getItem("daynum");

                    console.log(daynum)
               }
            });
        }
    }
}
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

