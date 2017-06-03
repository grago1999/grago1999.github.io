window.onblur = function () { document.title = "Hey! Come back!"; }
window.onfocus = function () { document.title = "Who's Gianluca?"; }

var ids = [];
var currentId = "";
var duration = 750;

console.log("You found me ( ͡° ͜ʖ ͡°). Look around for some other surprises!")

function setup(pageId) {
	if (pageId == 1) {
		ids = ["#education", "#company", "#blog", "#languages"];
	} else if (pageId == 2) {
		ids = ["#lookingglass", "#followingtech", "#mdkit", "#helihavoc", "#graphingkit", "#gemini"];
	} else {
		ids = ["#email", "#github", "#linkedin"];
	}
}

function hideAll() {
	for (var i = 0; i < ids.length; i++) {
		$(ids[i]+"Info").slideUp(duration);
	}
}

function selectedItem(id) {
	if (id == currentId) {
		currentId = "";
		$("#"+id+"Info").slideUp(duration);
	} else {
		hideAll();
		currentId = id;
		$("#"+id+"Info").slideDown(duration);
	}
	$('html, body').animate({
        scrollTop: $("#"+id).offset().top-window.innerHeight/4
    }, duration);
}