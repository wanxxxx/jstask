function tiao() {
	window.open('../task2.html');
}

function arra(m) { //0-m�������������
	var arr = new Array(m);
	arr[0] = 0;
	for (var i = 1; i < m; i++) {
		var rnd = Math.floor(Math.random() * (i + 1));
		arr[i] = arr[rnd];
		arr[rnd] = i;
	}
	return arr;
}
var arr2 = document.getElementsByName('unknown'); //��nameΪunknown��Ԫ�����һ������

function checkField(val) {
	var arr1 = arra(val);
	if (val >= 6 && val <= 18) {
		civilian.value = val - killer.value;
	} else {
		alert("��������ȷ����")
	}
	for (i = 0; i < val; i++) { //ȫ����ƽ��
		arr2[arr1[i]].value = "1";
	}
	if (val >= 6 && val <= 8) {
		killer.value = 1;
	} else if (val >= 9 && val <= 11) {
		killer.value = 2;
	} else if (val >= 12 && val <= 15) {
		killer.value = 3;
	} else if (val >= 16 && val <= 18) {
		killer.value = 4;
	} else {
		alert("��������ȷ����")
	}
	for (i = 0; i < val; i++) { //ȫ����ƽ��
		arr2[arr1[i]].value = "";
	}
	for (i = 0; i < killer.value; i++) { //�������ɱ��
		arr2[arr1[i]].value = "ɱ��";
	}

}