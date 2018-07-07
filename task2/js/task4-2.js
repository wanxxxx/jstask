var msg = sessionStorage.getItem("data").split(",");
console.info(msg);

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


//状态机
var fsm = new StateMachine({
    init: '1',
    transitions: [{
        name: 'kill',
        from: '1',
        to: '2'
    }, {
        name: 'lastwords',
        from: '2',
        to: '3'
    }, {
        name: 'allspeak',
        from: '3',
        to: '4'
    }],
    methods: {
        onBeforeTransition: function() {
            
        },
      
    }
})
console.log("状态机zhaung " + fsm.state);
//调用状态机
$("#btn1").click(function() {
     window.location.href = 'task4-2result.html';
     fsm.kill();
     
});