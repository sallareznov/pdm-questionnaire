function redirect(nextStepForYes, nextStepForNo) {
	var buttonOui = document.getElementById('oui');
	var buttonNon = document.getElementById('non');
	var anchorNext = document.getElementById('next');
	if (oui.checked) {
		window.location = "etape" + nextStepForYes + ".html";
		return "Oui";
	}
	else {
		window.location = "etape" + nextStepForNo + ".html";
		return "Non";
	}
}
