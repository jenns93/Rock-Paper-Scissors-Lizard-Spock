document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");
	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getElementsByTagName("data-type") == "start") {
				activateButtons();
			} else {
				reply_click(clicked_id);
			}
		});
	}
});

function disableButtons() {
	document.querySelectorAll('button.controls').forEach(elem => {
		elem.disabled = true;
	});
}

function activateButtons() {
	document.querySelectorAll('button.controls').forEach(elem => {
		elem.disabled = false;
	});
}
var myArray = ['<i class="fas fa-hand-rock"></i>', '<i class="fas fa-hand-paper"></i>', '<i class="fas fa-hand-scissors"></i>', '<i class="fas fa-hand-lizard"></i>', '<i class="fas fa-hand-spock"></i>'];

function reply_click(clicked_id) {
	let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
	let user = document.getElementById("user");
	let choice = document.getElementById(clicked_id).innerHTML;
	user.innerHTML = choice
	let result = document.getElementById("result");
	
	if (choice === computer) {
		result.innerHTML = "Draw";
	} else if (choice == myArray[0] && (computer == myArray[2] || computer == myArray[3])) {
		result.innerHTML = "Win";
	} else if (choice == myArray[1] && (computer == myArray[0] || computer == myArray[4])) {
		result.innerHTML = "Win";
	} else if (choice == myArray[2] && (computer == myArray[1] || computer == myArray[3])) {
		result.innerHTML = "Win";
	} else if (choice == myArray[3] && (computer == myArray[1] || computer == myArray[4])) {
		result.innerHTML = "Win";
	} else if (choice == myArray[4] && (computer == myArray[0] || computer == myArray[2])) {
		result.innerHTML = "Win";
	} else {
		result.innerHTML = "Lose";	
	}
	incrementScore()
	levelUp();
	gameOver();
}


function incrementScore() {
	let result = document.getElementById("result");
	if (result.innerHTML === "Win") {
		++document.getElementById("wins").innerHTML;
		++document.getElementById("score").innerHTML;
		result.style.color = "#1a9e00";
	} else if (result.innerHTML === "Lose") {
		--document.getElementById("loses").innerHTML;
		result.style.color = "#dd2214";
	} else {
		result.style.color = "rgb(199, 30, 241)";
	}
}


function levelUp() {
	let winCheck = document.getElementById("wins");
	let Continue = document.getElementById("continue");
	let scoreCheck = document.getElementById("score");
	let winCondition = 3;
	if (parseInt(winCheck.innerHTML) === winCondition) {
		++document.getElementById("level-number").innerHTML;
		document.getElementById('level').innerHTML = "LEVEL UP";
		document.getElementById('score').innerHTML = scoreCheck.innerHTML;
		Continue.innerHTML = "Continue";
		Continue.style.display = "block";
		disableButtons();
	}
}

function resume() {
	let Continue = document.getElementById("continue");
	let levelCheck = document.getElementById("level-number");
	let loseCheck = document.getElementById("loses");
	let scoreCheck = document.getElementById("score");
	document.getElementById('computer').innerHTML = "COM";
	document.getElementById('result').innerHTML = "Vs";
	document.getElementById('user').innerHTML = "YOU";
	document.getElementById('wins').innerHTML = "0";
	document.getElementById('level').innerHTML = "LEVEL";
	document.getElementById('loses').innerHTML = loseCheck.innerHTML;
	document.getElementById('score').innerHTML = scoreCheck.innerHTML;
	document.getElementById('level-number').innerHTML = levelCheck.innerHTML;
	Continue.style.display = "none";
	activateButtons();
}



function reset() {
	let playAgain = document.getElementById("play-again");
	document.getElementById('computer').innerHTML = "COM";
	document.getElementById('result').innerHTML = "Vs";
	document.getElementById('user').innerHTML = "YOU";
	document.getElementById('wins').innerHTML = "0";
	document.getElementById('loses').innerHTML = "10";
	document.getElementById('score').innerHTML = "0";
	document.getElementById('level-number').innerHTML = "1";
	playAgain.style.display = "none";
	activateButtons();
}

function gameOver() {
	let loseCheck = document.getElementById("loses");
	let playAgain = document.getElementById("play-again");
	let score = document.getElementById("score");
	if (loseCheck.innerHTML < 1) {
		document.getElementById('computer').innerHTML = "GAME OVER";
		document.getElementById('result').innerHTML = "SCORE";
		document.getElementById('user').innerHTML = score.innerHTML;
		playAgain.innerHTML = "Play Again";
		playAgain.style.display = "block";
		disableButtons();
	}
}

function rules() {
	let ruleList = document.getElementById("rule-list");
	let rules = document.getElementById("rules");
	ruleList.style.visibility = "visible";
	rules.style.backgroundColor = "rgba(230, 83, 149, 0.38)";
}