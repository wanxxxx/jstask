	var arr1 = arra(val);//1-val随机排列数组
	var arr2 = new Array(18); //1-N玩家的集合
	for (i = 0; i < val; i++) { //全赋予平民
		arr2[i] = "平民";
	}
	for (i = 0; i < killer.value; i++) { //随机赋予杀手
		arr2[arr1[i]] = "杀手";
	}
	return arr2;

} 
console.info(checkField());