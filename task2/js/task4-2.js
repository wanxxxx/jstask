var get = sessionStorage.data; //读取
var msg = JSON.parse(get); //重新转换为数组
var daynum = +sessionStorage.getItem('daynum')
var checknum = +sessionStorage.getItem('checknum') ;
console.log(msg);
console.log(daynum + 1);
console.log(checknum + 1);

function back() {
    window.location.href = 'task3.html';
}

function end() {
    window.location.href = 'task3.html';
}

function abc() {
    window.location.href = 'task4-2-2.html';
}
$(".img").click(function() {
    window.location.href = 'task4-2-2.html';
})
var p = document.getElementsByClassName('p');
//状态机
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
        //全局
        onBeforeTransition: function(lifecycle) {
            console.log('现在是' + lifecycle.transition + '状态');
            console.log("今天是第" + daynum + "天")
        },
        //
        onKill: function() {
            console.log('杀人');
            p[0].setAttribute("class", "p-click");
            var daynum = sessionStorage.getItem("daynum");
        },
        onLastwords: function() {
            p[0].setAttribute("class", "p-click");
            console.log('发表遗言')
        },
        onAllspeak: function() {
            p[0].setAttribute("class", "p-click");
            console.log('依次发言')
        },
        onVote: function() {
            p[0].setAttribute("class", "p-click");
            console.log('依次发言')
        },
    }
})
switch (checknum) {
    case 1:
        break;
    case 2:
        killgame.action1();
        break;
    case 3:
        killgame.action1();
        killgame.action2();
        break;
    case 4:
        killgame.action1();
        killgame.action2();
        killgame.action3();
}
//调用状态机
var bd = $(".btn")[0].querySelectorAll('div'),
    bd1 = bd[0];
bd2 = bd[1];
bd3 = bd[2];
bd4 = bd[3];
bd[0].onclick = function() {
    console.log(daynum);
    if (daynum == 1) {
        killgame.action1();
        window.location.href = 'task4-2result.html';
        daynum = daynum + 1;
        sessionStorage.setItem('daynum', daynum);
    } else {
        alert('请按顺序操作');
    }
}
bd[1].onclick = function() {
    var daynum = sessionStorage.getItem("daynum");
    console.log(daynum);
    if (daynum == 2) {
        killgame.action2();
    } else {
        alert('请按顺序操作');
    }
}