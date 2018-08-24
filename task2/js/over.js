var daynum = +sessionStorage.getItem('daynum')
var deadnum = JSON.parse(sessionStorage.deadnum);
var killernum = +sessionStorage.getItem('killernum');
var result1 = sessionStorage.getItem('result1');
var result2 = sessionStorage.getItem('result2');
var klist = JSON.parse(sessionStorage.klist);
//--------------复制多个main------------’
var main2 = document.getElementsByClassName('main2')[0]
var box = document.getElementsByClassName('box')
var input = document.getElementsByClassName('input');
var result = document.getElementsByClassName('result');
if (klist.length % 2 == 0) {
    daynum--;
}
console.log('今天是第几天：' + daynum)
var day = document.getElementsByClassName('day');
console.log('死掉的人顺序：' + klist)
var day = document.getElementsByClassName('day');
for (i = 0; i < daynum - 1; i++) {
    main2.append(box[0].cloneNode(1));
}
for (i = 0; i < daynum; i++) {
    var num = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    day[i].textContent = '第' + num[i] + '天';
}
console.log("deadnum:" + deadnum)
console.log('进行了' + daynum + '天')
result[0].textContent = result1
result[1].textContent = result2;
for (i = 1; i < input.length - 1; i++) {
    input[2 * i - 2].textContent = +deadnum[2 * i - 2] + '号被杀手杀死,' + deadnum[2 * i - 2] + '号是' + klist[2 * i - 2];
    input[2 * i - 1].textContent = +deadnum[2 * i - 1] + '号被全民投票投死,' + deadnum[2 * i - 1] + '号是' + klist[2 * i - 1];
    if (klist.length % 2 == 1) {
        input[input.length - 1].textContent = ' ';
        console.log('ss')
    }
}
$.each(deadnum, function(idx) {
    if (deadnum[idx] == 0) {
        input[idx].textContent = "无任何操作"
    }
    console.log(idx)
});