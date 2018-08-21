var msg = JSON.parse(sessionStorage.msg)
var choose = document.getElementsByClassName("choose")
var main = document.getElementsByClassName("main")
console.log(msg)
for (i = 0; i < msg.length - 1; i++) {
    main[0].append(choose[0].cloneNode(1));
}
for (i = 0; i < msg.length; i++) {
    var input1 = document.getElementsByClassName("choose1")
    var input2 = document.getElementsByClassName("choose2")
    input1[i].textContent = msg[i];
    input2[i].textContent = (i + 1) + "号";
}