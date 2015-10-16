function redirect(nextIds) {
	var inputs = document.getElementsByClassName('choice');
	var labels = document.getElementsByClassName('label');
	for (i = 0 ; i < inputs.length ; i++) {
		if (inputs[i].checked) {
			window.location = "etape" + nextIds[i] + ".html";
			return labels[i].innerHTML;
		}
	}
}
