document.addEventListener('DOMContentLoaded',) function () {
	// subtitles
	function changeSub(num) {
		document.getElementById("subtitles").innerText = tell[num];
	}

	var tell = [
		"pay attention during school",
		"cappuccino is minimal i guess 😭🙏🏽",
		"hey man i miss the like collarbones B)",
		"also check out classwork heaven",
		"molki.pages.dev",
		"piracy on top",
		"github.com/molki-again/cappucino",
		"github.com/titaniumnetwork-dev/Ultraviolet",
        ":3",
        "mf's be beggin for web proxies on the daily bro",
        "classwork-heaven.netlify.app",
        "also check out szvy central",
        "also check out kvz online",
        "also check out breakium",
        "ocular.network",
        "ajh.quest",
        "thanks ultraviolet",
        "im not even working on the frontend anymore bro im just writing quotes im so cooked"
	];

	var howmany = tell.length;
	var randomIndex = Math.floor(Math.random() * howmany);

	document.getElementById("subtitles").innerText = tell[randomIndex];

	function changeSplash(num) {
		var sub = "Set current splash to splash " + num + ", " + tell[num];
		document.getElementById("subtitles").innerText = tell[num];
		return sub;
	}