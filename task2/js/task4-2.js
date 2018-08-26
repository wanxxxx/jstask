var msg = JSON.parse(sessionStorage.msg)
var daynum = +sessionStorage.getItem('daynum')
var deadnum = JSON.parse(sessionStorage.deadnum); //重新转换为数组
var checknum = +sessionStorage.getItem('checknum');
var people = JSON.parse(sessionStorage.people); //重新转换为数组
var imgc = +sessionStorage.getItem('imgc')
console.log(people)
console.log(msg)
console.log('deadnum=' + deadnum)
console.log('daynum=' + daynum)
console.log('imgc=' + imgc)
console.log("checknum=" + checknum)
var btn = document.getElementsByClassName('btn');
var input1 = document.getElementsByClassName('input1');
var input2 = document.getElementsByClassName('input2');
var main = document.getElementById('main')
var main1 = document.getElementsByClassName('main1')
var div1 = document.getElementsByClassName('div1');
var div2 = document.getElementsByClassName('div2');
//--------------复制多个main------------’
for (i = 0; i < msg.length; i++) {
    main.append(main1[0].cloneNode(1));
    var num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    input2[i].textContent = '第' + num[i + 1] + '天'
}
//--------------根据天数显示------------’
div2[daynum - 1].setAttribute('style', 'display:flex')
for (i = 0; i < daynum; i++) {
    main1[i].setAttribute('style', 'display:block')
}
for (i = 0; i < 2 * msg.length; i++) {
    if (deadnum[i] == 0) {
        input1[i].textContent = '没有进行任何操作'
    } else {
        input1[i].textContent = deadnum[i] + '号被杀手杀死，真实身份是' + msg[deadnum[i] - 1];
    }
}
console.log(msg[deadnum[i]])
for (i = 0; i < 4 * daynum - 4; i++) {
    btn[i].classList.add('btn-click');
}
//--------------点击div1隐藏div2------------’
for (i = 0; i < msg.length; i++) {
    div1[i].onclick = function() {
        var divnum = $('.div1').index(this);
        if (div2[divnum].style.display == "flex") {
            div2[divnum].setAttribute('style', 'display:none')
        } else {
            div2[divnum].setAttribute('style', 'display:flex')
        }
    }
}
//--------------input1显示隐藏------------’
for (i = 0; i < 2 * daynum - 2; i++) {
    if (daynum > 1) {
        input1[i].setAttribute('style', 'display:flex')
    }
}
//--------------状态机------------
var killgame = new StateMachine({
    init: 'ready',
    transitions: [{
        name: 'action1',
        from: 'ready',
        to: 'kill'
    }, {
        name: 'action2',
        from: 'kill',
        to: 'lastwords'
    }, {
        name: 'action3',
        from: 'lastwords',
        to: 'allspeak'
    }, {
        name: 'action4',
        from: 'allspeak',
        to: 'vote'
    }],
    methods: {
        onBeforeTransition: function(lifecycle) {
            console.log('onBeforeTransition:' + lifecycle.transition);
        },
        onKill: function() {
            btn[4 * daynum - 4].classList.add('btn-click')
            input1[2 * daynum - 2].setAttribute('style', 'display:flex')
        },
        onLastwords: function() {
            btn[4 * daynum - 3].classList.add('btn-click');
        },
        onAllspeak: function() {
            btn[4 * daynum - 2].classList.add('btn-click')
        },
        onVote: function() {
            btn[4 * daynum - 1].classList.add('btn-click')
        },
    }
});
switch (checknum) {
    case 0:
        break;
    case 1:
        killgame.action1();
        break;
    case 2:
        killgame.action1();
        killgame.action2();
        break;
    case 3:
        killgame.action1();
        killgame.action2();
        killgame.action3();
    case 4:
        killgame.action1();
        killgame.action2();
        killgame.action3();
        killgame.action4();
}
//--------------调用状态机------------
var inputt = $(".btn").children('p')
inputt[4 * daynum - 4].onclick = function() {
    var checknum = +sessionStorage.getItem('checknum');
    if (checknum == 0) {
        sessionStorage.setItem('checknum', 1);
        window.location.href = 'task4-2result.html';
    } else {
        alert('请按顺序操作');
    }
}
inputt[4 * daynum - 3].onclick = function() {
    var checknum = +sessionStorage.getItem('checknum');
    if (checknum == 1) {
        var con = confirm('请死者亮明身份，发表遗言')
        if (con == true) {
            killgame.action2();
            checknum = checknum + 1;
            sessionStorage.setItem('checknum', 2);
        }
    } else {
        alert('请按顺序操作');
    }
}
inputt[4 * daynum - 2].onclick = function() {
    var checknum = +sessionStorage.getItem('checknum');
    if (checknum == 2) {
        var con = confirm('玩家依次发言')
        if (con == true) {
            killgame.action3();
            sessionStorage.setItem('checknum', 3);
        }
    } else {
        alert('请按顺序操作');
    }
}
inputt[4 * daynum - 1].onclick = function() {
    var checknum = +sessionStorage.getItem('checknum');
    if (checknum == 3) {
        killgame.action4();
        sessionStorage.setItem('checknum', 4);
        window.location.href = 'task4-2result.html ';
    } else {
        alert('请按顺序操作');
    }
}
var deadnum = JSON.parse(sessionStorage.deadnum);
//--------------gameover------------
var klist = []
for (i = 0; i < deadnum.length; i++) {
    if (deadnum[i] != 0) {
        klist[i] = msg[deadnum[i] - 1]
    } else {
        klist[i] = "无"
    }
}
var killernum = +sessionStorage.getItem('killernum');
console.log(klist)
var p = [];
var k = []
$.each(klist, function(idx) {
    if (klist[idx] == '平民') {
        p.push(idx)
    }
    if (klist[idx] == '杀手') {
        k.push(idx)
    }
});
if (k.length == killernum || killernum - k.length>=msg.length - killernum - p.length) {
    sessionStorage.klist = JSON.stringify(klist);
    window.location.href = 'over.html '
    console.log("杀手" + (killernum - k.length) + '人')
    console.log('平民' + (msg.length - killernum - p.length) + '人')
} else {
    console.log('出问题啦')
}
sessionStorage.setItem('result1', "杀手" + (killernum - k.length) + '人');
sessionStorage.setItem('result2', '平民' + (msg.length - killernum - p.length) + '人');
console.log('daynum=' + daynum);

function end() {
    var con = confirm('确定结束游戏')
    if (con == true) {
        window.location.href = 'task2.html '
    }
}