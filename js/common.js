function addToSession(question, answer) {
	var recap = JSON.parse(sessionStorage.getItem('recap'));
	var etape = { question : question, answer : answer };
	recap.push(etape);
	sessionStorage.setItem('recap', JSON.stringify(recap));
}

function getSession() {
	var table = document.getElementById('body');
	var recap = JSON.parse(sessionStorage.getItem('recap'));
	for(i = 0; i < recap.length; i++) {
		var row = document.createElement('tr');
		var questionColumn = document.createElement('td');
		var answerColumn = document.createElement('td');
		questionColumn.innerHTML = recap[i].question;
		answerColumn.innerHTML = recap[i].answer;
		row.appendChild(questionColumn);
		row.appendChild(answerColumn);
		table.appendChild(row);
	}
}
