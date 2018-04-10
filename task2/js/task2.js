function tiao() {
	window.location.href = '../task2.html';
}

function tiao3() {
	window.location.href = 'task3.html';
}

function arra(m) { //0-m的随机排列数组
	var arr = new Array(m);
	arr[0] = 0;
	for (var i = 1; i < m; i++) {
		var rnd = Math.floor(Math.random() * (i + 1));
		arr[i] = arr[rnd];
		arr[rnd] = i;
	}
	return arr;
}



function checkField() { //修改事件
	var val = document.getElementById('player').value;
	if (val >= 6 && val <= 18) {
		killer.value = 1;
	}
	if (val >= 6 && val <= 8) {
		killer.value = 1;
		civilian.value = val - killer.value
	} else if (val >= 9 && val <= 11) {
		killer.value = 2;
		civilian.value = val - killer.value
	} else if (val >= 12 && val <= 15) {
		killer.value = 3;
		civilian.value = val - killer.value
	} else if (val >= 16 && val <= 18) {
		killer.value = 4;
		civilian.value = val - killer.value
	} else {
		alert("请输入正确数字")
	}
	return val;
}
function fapai() {//存入数据
		sessionStorage.setItem("data", checkField());
		window.location.href = "task3.html"
}