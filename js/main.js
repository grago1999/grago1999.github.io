window.onblur = function () { document.title = "Hey! Come back!"; }
window.onfocus = function () { document.title = "Who's Gianluca?"; }

var ids = [];
var currentId = "";

console.log("You found me ( ͡° ͜ʖ ͡°). Look around for some other easter eggs!")

function setup(pageId) {
	if (pageId == 1) {
		ids = ["#education", "#company", "#blog", "#design"];
	} else if (pageId == 2) {
		ids = ["#conjungo", "#vrkit", "#graphingkit", "#followingtech", "#mdkit"];
	} else {
		ids = ["#email", "#github", "#linkedin", "#wwdcscholars"];
	}
}

function hideAll() {
	for (var i = 0; i < ids.length; i++) {
		$(ids[i]+"Info").slideUp(750);
	}
}

function selectedItem(id) {
	if (id == currentId) {
		currentId = "";
		$("#"+id+"Info").slideUp(750);
	} else {
		hideAll();
		currentId = id;
		$("#"+id+"Info").slideDown(750);
	}
}