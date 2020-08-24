
let ids = [];
const duration = 750;
const fileName = window.location.pathname.includes('/') ? window.location.pathname.split('/').pop() : "index.html";
const currentPage = fileName === "index.html" ? "home" : fileName.replace(".html", "");

window.onblur = function () { document.title = "Hey! Come back!"; }
window.onfocus = function () { document.title = "Who's Gianluca?"; }

if (currentPage == "about") {
	ids = ["#education", "#company", "#blog", "#languages"];
} else if (currentPage == "portfolio") {
	ids = ["#lookingglass", "#locus", "#blockit", "#core", "#gemini", "#mdkit"];
} else {
	ids = ["#email", "#github", "#linkedin"];
}

console.log("you found me ( ͡° ͜ʖ ͡°)");

const hideAll = () => {
	for (var i = 0; i < ids.length; i++) {
		$(ids[i]+"Info").slideUp(duration);
	}
}

const selectedItem = id => {
	if (id == currentPage) {
		currentPage = "";
		$("#"+id+"Info").slideUp(duration);
	} else {
		hideAll();
		$("#"+id+"Info").slideDown(duration);
	}
	$("html, body").animate({
        scrollTop: $("#"+id).offset().top-window.innerHeight/4
    }, duration);
};
