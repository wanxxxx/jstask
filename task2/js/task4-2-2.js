var msg = JSON.parse(sessionStorage.msg)
var sss = sessionStorage.people;
var people = JSON.parse(sss); //重新转换为数组
var input1 = document.getElementsByClassName("choose1")

var choose = document.getElementsByClassName("choose")
var main = document.getElementsByClassName("main")
for (i = 0; i < msg.length - 1; i++) {
    main[0].append(choose[0].cloneNode(1));
}
//--------------杀掉后变色--------------
$.each(people, function(idx) {
    if (people[idx] == 'dead') {
        input1[idx].setAttribute('style', ' background: #83b09a')
    }
});

