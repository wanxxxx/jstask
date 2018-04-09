function tiao() {
	window.open('../task2.html');
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
var arr2 = document.getElementsByName('unknown'); //将name为unknown的元素组成一个集合

function checkField(val) {
	var arr1 = arra(val);
	if (val >= 6 && val <= 18) {
		civilian.value = val - killer.value;
	} else {
		alert("请输入正确数字")
	}

	if (val >= 6 && val <= 8) {
		killer.value = 1;
		for (i = val; i < 18; i++) { //全赋予平民
			arr2[i].value = " ";
		}
	} else if (val >= 9 && val <= 11) {
		killer.value = 2;
		for (i = val; i < 18; i++) { //全赋予平民
			arr2[i].value = " ";
		}
	} else if (val >= 12 && val <= 15) {
		killer.value = 3;
		for (i = val; i < 18; i++) { //全赋予平民
			arr2[i].value = " ";
		}
	} else if (val >= 16 && val <= 18) {
		killer.value = 4;
		for (i = val; i < 18; i++) { //全赋予平民
			arr2[i].value = " ";
		}
	} else {
		alert("请输入正确数字")
	}

	for (i = 0; i < val; i++) { //全赋予平民
		arr2[arr1[i]].value = "平民";
	}
	for (i = 0; i < killer.value; i++) { //随机赋予杀手
		arr2[arr1[i]].value = "杀手";
	}


}