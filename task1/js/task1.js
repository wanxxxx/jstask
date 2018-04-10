window.onload=function(){
function arra(m) {
	var arr = new Array(m);
	arr[0] = 0;
	for (var i = 1; i < m; i++) {
		var rnd = Math.floor(Math.random() * (i + 1));
		arr[i] = arr[rnd];
		arr[rnd] = i;
	}
	return arr;
}



var div = document.getElementsByTagName('div');
var start;
start = document.getElementById('sss');
var end;
end = document.getElementById('eee');
var all;
start.onclick = function() { //点击开始
	clearInterval(all);
	all = setInterval(function() {
		var arr1 = arra(8);
		//随机颜色
		var colornum1 = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
		var colornum2 = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
		var colornum3 = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);

		function arrbg() { //随机不重复颜色数组
			var arr = [];
			while (colornum1 == colornum2) {
				colornum2 = bg()
			};
			while (colornum1 == colornum3 || colornum2 == colornum3) {
				colornum3 = bg()
			};
			arr.push(colornum1, colornum2, colornum3);
			return arr;
		}
		for (i = 0; i < div.length; i++) {
			div[i].style.background = "orange";
		}
		var color = arrbg();
		for (i = 0; i < 3; i++) {
			div[arr1[i]].style.background = color[i];
console.info(color[i]);
		}
		
	}, 1000);
}

end.onclick = function() {
	clearInterval(all);
	for (i = 0; i < div.length; i++) {
		div[i].style.background = "orange";
	}
}
}