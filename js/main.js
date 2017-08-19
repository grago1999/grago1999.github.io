window.onblur = function () { document.title = "Hey! Come back!"; }
window.onfocus = function () { document.title = "Who's Gianluca?"; }


const appId = 10101010;

let ids = [];
const duration = 750;
const currentPage = window.location.pathname.split("/").pop();

if (currentPage == "about.html") {
	ids = ["#education", "#company", "#blog", "#languages"];
} else if (currentPage == "portfolio.html") {
	ids = ["#lookingglass", "#followingtech", "#mdkit", "#helihavoc", "#graphingkit", "#gemini"];
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
	// new Fingerprint2().get((result) => {
	// 	var sha = new jsSHA("SHA-512", "TEXT");
	// 	sha.update(result);
	// 	deviceId = sha.getHash("HEX");
	// 	var params = {
	// 		appId: appId,
	// 		deviceId: deviceId,
	// 		actionTypeId: actionTypeId
	// 	};
	// 	if (elementId) {
	// 		params.elementId = elementId;
	// 	}
	// 	$.ajax({
	// 	    type: 'POST',
	// 	    url: 'http://192.168.1.176:4004/analytics/api/report.php',
	// 	    data: JSON.stringify(params),
	// 	    contentType: "application/json",
	// 	    dataType: 'json'
	// 	});
	// });
};

report("view-page", currentPage);