const appId = 10101010;

let ids = [];
const duration = 750;
const fileName = window.location.pathname.includes('/') ? window.location.pathname.split('/').pop() : "index.html";
const currentPage = fileName === "index.html" ? "home" : fileName.replace(".html", "");

window.onblur = function () { document.title = "Hey! Come back!"; }
window.onfocus = function () { document.title = "Who's Gianluca?"; }

if (currentPage == "about") {
	ids = ["#education", "#company", "#blog", "#languages"];
} else if (currentPage == "portfolio") {
	ids = ["#lookingglass", "#mdkit", "#graphingkit", "#gemini"];
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
    report("click-show-info", id);
};

const report = (actionTypeId, elementId = null) => {
	new Fingerprint2().get((result) => {
		var sha = new jsSHA("SHA-512", "TEXT");
		sha.update(result);
		deviceId = sha.getHash("HEX");
		var reportUrl = "https://conjungo.io/analytics/api/v1/report?appId="+appId.toString()+"&deviceId="+deviceId+"&actionTypeId="+actionTypeId;
		if (elementId) {
			reportUrl += ("&elementId=" + elementId);
		}
		$.get(reportUrl, (data, status) => {
	        console.log("yay");
	    });
	});
};

report("view-page", currentPage);