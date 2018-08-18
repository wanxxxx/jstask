function back() {
    window.location.href = 'task2.html';
}

function end() {
    window.location.href = 'task2.html';
}
var msg = JSON.parse(sessionStorage.msg)
console.info(msg);
var main1 = document.getElementById('main1')
var main2 = document.getElementById('main2')
var two = document.getElementById('two')
var one = document.getElementsByClassName('one')
var three = document.getElementsByClassName('three')
$(document).ready(function() {
    $(".btn").click(function() {
        $("#main1").toggle();
        $("#main2").toggle();
        var num2 = parseInt(one[1].textContent)
        if (main1.style.display === "none") {
            one[1].textContent = num2 + 1;
            two.textContent = msg[num2]
            three[1].textContent = parseInt(one[1].textContent) + 1
        }
        if (main2.style.display === "none") {
            one[0].textContent = three[1].textContent
            three[0].textContent = one[0].textContent
        }
        if (three[0].textContent >= msg.length) {
            $("#btn1").hide();
            $("#btn2").show();
        }
    });
    $("#btn2").click(function() {
        window.location.href = "task4-1.html";
    });
})
var people = []; //这是一个数组
var deadnum = []
for (i = 0; i < msg.length; i++) {
    people[i] = 'live';
}
sessionStorage.setItem('daynum', 1);
sessionStorage.setItem('checknum', 0);
sessionStorage.people = JSON.stringify(people); //存入
sessionStorage.deadnum = JSON.stringify(deadnum);