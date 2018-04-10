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

var msg = sessionStorage.getItem("data");
console.log(msg);
var newarr = function() {
	var arr1 = arra(msg); //1-N随机排列数组
	var arr2 = []; //1-N玩家的集合
	for (i = 0; i < val; i++) { //全赋予平民
		arr2[i] = "平民";
	}
	for (i = 0; i < killer.value; i++) { //随机赋予杀手
		arr2[arr1[i]] = "杀手";
	}
	return arr2;

}
console.info(newarr);