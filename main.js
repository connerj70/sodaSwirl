$(document).ready(function(){

var soda = document.querySelectorAll(".soda3");
var swirl = document.querySelector("#swirl");
var swirl1 = document.querySelector("#swirl1");
var swirl2 = document.querySelector("#swirl2");

var pages = ["sprite.html","lemonade.html","pepsi.html","rootbeer.html","fanta.html","powerade.html","drpepper.html","mountaindew.html","coke.html"];

for(var i = 0; i < soda.length; i++) {
	soda[i].addEventListener("mouseenter", function() {
		this.style.width = "9em";
		this.style.height = "9em";
	})

	soda[i].addEventListener("mouseout", function() {
		this.style.width = "8em";
		this.style.height = "8em";

	})
};

swirl.addEventListener("mouseenter", function() {
	swirl.style.width = "100px";
	swirl.style.height = "100px";
})

swirl.addEventListener("mouseout", function() {
	swirl.style.width = "75px";
	swirl.style.height = "75px";
})

swirl1.addEventListener("mouseenter", function() {
	swirl1.style.width = "75px";
	swirl1.style.height = "75px";
})

swirl1.addEventListener("mouseout", function() {
	swirl1.style.width = "50px";
	swirl1.style.height = "50px";
})

swirl2.addEventListener("mouseenter", function() {
	swirl2.style.width = "50px";
	swirl2.style.height = "50px";
})

swirl2.addEventListener("mouseout", function() {
	swirl2.style.width = "25px";
	swirl2.style.height = "25px";
})

$("#robot_button").click(function(){
	$("#robot")
	$("#robo_btn").attr("href", pages[Math.floor(Math.random()*10)]);
});

$("#robot").on("mouseenter", function() {
	$(this).css("width", "60px");
	$(this).css("height","60px");
	$("#ouch").css("display","inline");
});
$("#robot").on("mouseout", function() {
	$(this).css("width", "50px");
	$(this).css("height", "50px");
	$("#ouch").css("display","none");
})

});