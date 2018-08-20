var msg = JSON.parse(sessionStorage.msg)
var sss = sessionStorage.people;
var people = JSON.parse(sss); //重新转换为数组
var daynum = +sessionStorage.getItem('daynum')
var checknum = +sessionStorage.getItem('checknum');
var deadnum = JSON.parse(sessionStorage.deadnum); //重新转换为数组
console.log("daynum=" + daynum);
console.log(people)
console.log("checknum=" + checknum)
var input1 = document.getElementsByClassName("choose1")
var input2 = document.getElementsByClassName("choose2")
//--------------根据人数动态生成------------
var choose = document.getElementsByClassName("choose")
var main = document.getElementsByClassName("main")
for (i = 0; i < msg.length - 1; i++) {
    main[0].append(choose[0].cloneNode(1));
}
for (i = 0; i < msg.length; i++) {
    var input1 = document.getElementsByClassName("choose1")
    var input2 = document.getElementsByClassName("choose2")
    input1[i].textContent = msg[i];
    input2[i].textContent = (i + 1) + "号";
}
console.log(choose)
//--------------点击显示图片--------------\

for (i = 0; i < msg.length; i++) {
    choose[i].onclick = function() {
        for (i = 0; i < msg.length; i++) {
            $("img")[i].setAttribute("class", "img");
        }
        var img = this.querySelector('.img');
        img.setAttribute("class", "img-click");
        if (checknum == 1 || checknum == 4) {
            var deadthis = $('.choose').index(this)
            sessionStorage.setItem('deadthis', deadthis);
            console.log(deadthis)
        }
    }
}
//--------------点击确认--------------
$("#btn2").click(function() {
    var imgc = $(".img-click").length;
    console.log(imgc)
    var killed = $(".img-click").prev().prev();
    if (imgc == 0) { //没点击任何玩家
        if (checknum == 4) {
            alert("请先选择要操作的玩家");
        } else {
            deadnum.push(0)
            sessionStorage.deadnum = JSON.stringify(deadnum);
            window.location.href = 'task4-2.html';
        }
    } else if (killed.textContent === "杀手" & checknum !== 4) {
        alert("你是杀手不能杀死本职业，请选择其他玩家杀死")
    } else { //点击过玩家
        var deadthis = +sessionStorage.getItem('deadthis');
        if (people[deadthis] == 'dead') {
            alert('当前玩家已死亡，请选择其他玩家')
        } else {
            people[deadthis] = 'dead';
            sessionStorage.people = JSON.stringify(people);
            deadnum.push(deadthis + 1);
            if (checknum == 4) {
                sessionStorage.setItem('daynum', daynum + 1);
                sessionStorage.setItem('checknum', 0);
            }
            sessionStorage.deadnum = JSON.stringify(deadnum);
            window.location.href = 'task4-2.html';
        }
    }
    sessionStorage.klist = JSON.stringify(klist);
});
//--------------杀掉后变色--------------
$.each(people, function(idx) {
    if (people[idx] == 'dead') {
        input1[idx].setAttribute('style', ' background: #83b09a')
    }
});