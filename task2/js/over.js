var daynum = +sessionStorage.getItem('daynum')
var deadnum = JSON.parse(sessionStorage.deadnum);
var killernum = +sessionStorage.getItem('killernum');
var result1 = sessionStorage.getItem('result1');
var result2 = sessionStorage.getItem('result2');
var killed = JSON.parse(sessionStorage.killed);

//--------------复制多个main------------’
var main2 = document.getElementsByClassName('main2')[0]
var box = document.getElementsByClassName('box')
var input = document.getElementsByClassName('input');
var result = document.getElementsByClassName('result');


console.log('进行了' + daynum + '天')
console.log('死掉的人顺序：' + killed)
var day = document.getElementsByClassName('day');
for (i = 1; i < daynum ; i++) {
    main2.append(box[0].cloneNode(1));

}
for (i = 0; i < daynum-2; i++) {
    var num = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    day[i].value = '第' + num[i] + '天';
}
result[0].value = result1
result[1].value = result2;
for (i = 1; i < deadnum.length - 1; i++) {
    input[2 * i - 2].value = '晚上：' + deadnum[2 * i - 2] + '号被杀手杀死,' + deadnum[2 * i - 2] + '号是' + killed[2 * i - 2];
    input[2 * i - 1].value = '白天：' + deadnum[2 * i - 1] + '号被全民投票投死,' + deadnum[2 * i - 1] + '号是' + killed[2 * i - 1];
}
function end() {
    window.location.href = 'task2.html';
}