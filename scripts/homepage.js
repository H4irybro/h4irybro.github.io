hljs.initHighlightingOnLoad();

$(document).ready( function () {
	$("#secret").click( function () {
		var clrs = ["red","green","blue",
					"white", "silver", "gold", 
					"purple", "black", 
					"lightgreen", "lightblue", "lightred", "lightpurple", 
					"darkred", "darkgreen", "darkgreen", "darkpurple"];
		var rand = clrs[Math.floor(Math.random() * clrs.length)];
		$("#secret").css("color",rand);
	} );
} );

$(document).ready( function() {
	$("#secret").fadeOut("slow");
	$("#secret").fadeIn("slow");
} );

$(document).ready( function () {
} );

function extrapage() {
	var e = document.getElementById("p");
	var pg = e.options[e.selectedIndex].value;
	console.log(pg);

	if (pg != "++ Extra Pages ++") {
		window.location.href = "http://critiqu.es/" + pg;
	}
}