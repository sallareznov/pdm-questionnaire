function redirect(value, nextStepForTrue, nextStepForFalse) {
	var inputValue = document.getElementById('valeur');
	if (inputValue.value == value) {
		window.location = "etape" + nextStepForTrue + ".html";
	}
	else {
		window.location = "etape" + nextStepForFalse + ".html";
	}
	return inputValue.value;
}
