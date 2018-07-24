var get = sessionStorage.data; //读取
var msg = JSON.parse(get); //重新转换为数组
var sss = sessionStorage.people; //读取
var people = JSON.parse(sss); //重新转换为数组
var daynum = +sessionStorage.getItem('daynum')
console.log(daynum + "次杀人");
console.log(people)

function back() {
    window.location.href = 'task3.html';
}

function end() {
    window.location.href = 'task3.html';
}

function abc() {
    window.location.href = 'task4-2-2.html';
}
var input1 = document.getElementsByClassName("choose1")
var input2 = document.getElementsByClassName("choose2")
//--------------根据人数动态生成------------
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
            input1[i].value = msg[i]; //在input内放入名称号码
            input2[i].value = i + 1 + "号";
        }
    }
}
//--------------点击显示图片--------------
for (i = 0; i < msg.length; i++) {
    divdiv[i].onclick = function() {
        for (i = 0; i < msg.length; i++) {
            $("img")[i].setAttribute("class", "img");
        }
        var img = this.querySelector('.img');
        img.setAttribute("class", "img-click");
        var deadnum = $('.main-div-div').index(this) + 1;
        sessionStorage.setItem('deadnum', deadnum);
        console.log(deadnum)
    }
}
//--------------杀掉后变色--------------
$.each(people, function(idx) {
    if (people[idx] == 'dead') {
        input1[idx].setAttribute('style', ' background: #83b09a')
    }
});
//--------------点击确认--------------
$("#btn2").click(function() {
    var killed = $(".img-click").prev().prev();
    if (killed.val() === "杀手") {
        alert("你是杀手不能杀死本职业，请选择其他玩家杀死")
    } else {
        var deadnum = sessionStorage.getItem('deadnum')
        people[deadnum - 1] = 'dead'
        var sss = JSON.stringify(people); //转换为字符串
        sessionStorage.people = sss; //存入
        window.location.href = 'task4-2.html';
    }
});
//--------------状态机--------------
var lord = new StateMachine({
    init: 'live',
    transitions: [{
        name: 'action1',
        from: 'live',
        to: 'deaded'
    }, {
        name: 'action2',
        from: 'deaded',
        to: 'live'
    }, ],
    methods: {
        //全局
        //
        ondead: function() {
            console.log('杀人');
            p[0].setAttribute("class", "p-click");
            var daynum = sessionStorage.getItem("daynum");
        },
    }
})