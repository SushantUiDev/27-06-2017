$(document).ready(function () {
	$('.wrapper').css("opacity", "0.3");
});

$(document).ready(function () {
	$("#typed").typed({
		strings: ["My Name Is Sushant<span><span>!!!<br> I Am Here To Give Full Knowledge Of Web Design<br>So You Dont Need To Worry About Your Carrier..."],
		speed: 3000
	});

	$("#btn1").click(function () {
		$("#main-container").hide();
		$(".wrapper").css("opacity", "1");
	});
});