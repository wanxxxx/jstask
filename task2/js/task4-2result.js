var get = sessionStorage.data; //读取
var msg = JSON.parse(get); //重新转换为数组
var daynum = +sessionStorage.getItem('daynum')
console.log(daynum - 1 + "次杀人");

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
//根据人数动态生成div...
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
        input1[i].value = msg[i];
        input2[i].value = i + 1 + "号";
        //显示图片
        divdiv[i].onclick = function() {
            for (i = 0; i < msg.length; i++) {
                $("img")[i].setAttribute("class", "img");
            }
            var img = this.querySelector('.img');
            img.setAttribute("class", "img-click");
            var people = []; //这是一个数组
            for (i = 0; i < msg.length; i++) {
                people[i] = 'live'
            }
            var deanum = $('.main-div-div').index(this) + 1;
            people[deanum] = 'dead'
            sessionStorage.setItem('deanum', dea
                num);
            var sss = JSON.stringify(people); //转换为字符串
            sessionStorage.people = sss; //存入
            console.log(people)
        }
    }
}
$("#btn2").click(function() {
    var killed = $(".img-click").prev().prev().val();
    input1[]
    if (killed === "杀手") {
        alert("你是杀手不能杀死本职业，请选择其他玩家杀死")
    } else {
        window.location.href = 'task4-2.html';
    }
});