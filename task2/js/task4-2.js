var get = sessionStorage.data; //读取
var msg = JSON.parse(get); //重新转换为数组
console.log(msg);

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
var daynum;
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
        },
        //
        onKill: function() {
            p[0].setAttribute("class", "p-click");
            console.log('杀人');
            daynum = 1;
        },
        onlastwords: function() {
            p[0].setAttribute("class", "p-click");
            console.log('发表遗言')
        },
        onallspeak: function() {
            p[0].setAttribute("class", "p-click");
            console.log('依次发言')
        },
        onvote: function() {
            p[0].setAttribute("class", "p-click");
            console.log('依次发言')
        },
    }
})
//调用状态机
var bd = $(".btn")
console.log(bd)
var bd1=bd[0];
var bd2=bd[1];
var bd3=bd[2];
var bd4=bd[3]
switch (daynum) {
    case 1:
        window.location.href = 'task4-2result.html';
        break;
        killgame.action1();
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
bd1.onclick = function () {
    killgame.action1();
}
bd2.onclick = function () {}
bd3.onclick = function () {}
bd4.onclick = function () {}



var daynum = sessionStorage.getItem("daynum");


