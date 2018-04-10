var arr33 = sessionStorage.getItem("data");
var msg = arr33.split(",");
console.info(msg);
var main1 = document.getElementById('main1')
var main2 = document.getElementById('main2')
var input = $(":input");
input[2].value = 0;
$(document).ready(function() {
	$(".btn").click(function() {
		$("#main1").toggle();
		$("#main2").toggle();
		var num2 = parseInt(input[2].value)
		if (main1.style.display === "none") {

			input[2].value = num2 + 1;
			input[3].value = msg[num2]
			input[4].value = parseInt(input[2].value) + 1
		}
		if (main2.style.display === "none") {
			input[0].value = input[4].value
			input[1].value = input[0].value
		}
		if (input[1].value >= msg.length) {
			$("#btn1").hide();
			$("#btn2").show();
		}
	});

	$("#btn2").click(function() {
		window.location.href = "task4.html"
	});
})