var over = sessionStorage.getItem('over')
var daynum = +sessionStorage.getItem('daynum')
var msg = JSON.parse(sessionStorage.data);
var deadnum = JSON.parse(sessionStorage.deadnum);
var people = JSON.parse(sessionStorage.people);
$("#win").val(over + '胜利')
console.log(people)
console.log(msg)
console.log(deadnum)

//--------------复制多个main------------’
var main2 = document.getElementsByClassName('main2')[0]
var box = document.getElementsByClassName('box')
var input = document.getElementsByClassName('input');
var result = document.getElementsByClassName('result');
console.log(daynum)
console.log(box)

for (i = 0; i < daynum - 1; i++) {
    var day = document.getElementsByClassName('day');
    main2.append(box[0].cloneNode(1));
}
for (i = 0; i < daynum - 1; i++) {
    var num = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    day[i].value = '第' + num[i] + '天';
    console.log(day)
}
if (over == "平民") {
    result[0] = 0;
    result[1] = msg.length;
}
for (i = 0; i < msg.length; i++) {
list[i]
}