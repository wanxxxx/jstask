var msg = sessionStorage.getItem("data").split(",");
console.info(msg);
for (i = 0; i < msg.length; i++) { //根据人数动态生成
    if (i < msg.length) { //插入div
        var div = document.getElementById('div');
        var newdiv = document.createElement("div")
        div.appendChild(newdiv);
        newdiv.className = 'main-div-div';
        if (i < msg.length) { //插入input
            var newinput1 = document.createElement("input");
            var newinput2 = document.createElement("input");
            newinput1.className = 'choose1';
            newinput2.className = 'choose2';
            var divdiv = document.getElementsByClassName("main-div-div")
            divdiv[i].appendChild(newinput1);
            divdiv[i].appendChild(newinput2);
        } 
    }
}
var input1 = document.getElementsByClassName("choose1")
var input2 = document.getElementsByClassName("choose2")
for (i = 0; i < msg.length; i++) {
    input1[i].value = msg[i];
    input2[i].value = i + 1 + "号";
}
function start() {
    window.location.href = 'task4-2.html';
}
function back() {
    window.location.href = 'task3.html';
}
function back2() {
    window.location.href = 'task4-2.html';
}
function end() {
    window.location.href = 'task3.html';
}
function confirmm() {
    window.location.href = 'task4-2.html';
}