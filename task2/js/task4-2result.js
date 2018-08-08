var get = sessionStorage.data; //读取
var msg = JSON.parse(get); //重新转换为数组
var sss = sessionStorage.people; //读取
var people = JSON.parse(sss); //重新转换为数组
var daynum = +sessionStorage.getItem('daynum')
var checknum = +sessionStorage.getItem('checknum');
var deadnum = JSON.parse(sessionStorage.deadnum); //重新转换为数组
console.log("daynum=" + daynum);
console.log(people)
console.log("checknum=" + checknum)

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
        if (checknum == 1 || checknum == 4) {
            var deadthis = $('.main-div-div').index(this)
            sessionStorage.setItem('deadthis', deadthis);
            console.log(deadthis)
        }
    }
}
var list=[]
//--------------点击确认--------------
$("#btn2").click(function() {
    var imgc = $(".img-click").length;
    console.log(imgc)
    var killed = $(".img-click").prev().prev();
    if (imgc == 0) { //没点击任何玩家
        if (checknum == 4) {
            alert("请先选择要操作的玩家");
        } else {
            window.location.href = 'task4-2.html';
        }
    } else if (killed.val() === "杀手" & checknum !== 4) {
        alert("你是杀手不能杀死本职业，请选择其他玩家杀死")
    } else { //点击过玩家
        var deadthis = +sessionStorage.getItem('deadthis');
        if (people[deadthis] == 'dead') {
            alert('当前玩家已死亡，请选择其他玩家')
        } else {
            people[deadthis] = 'dead';
            sessionStorage.people = JSON.stringify(people);
            if (checknum !== 4) {
                deadnum[2 * daynum - 2] = deadthis + 1;
                window.location.href = 'task4-2.html';

            } else {
                deadnum[2 * daynum - 1] = deadthis + 1;
                sessionStorage.setItem('daynum', daynum + 1);
                sessionStorage.setItem('checknum', 0);
                window.location.href = 'task4-2.html';
            }
            sessionStorage.deadnum = JSON.stringify(deadnum);
        }
        console.log(deadthis)
    }
});
//--------------杀掉后变色--------------
$.each(people, function(idx) {
    if (people[idx] == 'dead') {
        input1[idx].setAttribute('style', ' background: #83b09a')
    }
});

