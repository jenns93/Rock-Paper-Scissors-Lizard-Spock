document.addEventListener("DOMContentLoaded", function() {
	disableButtons();
});

function disableButtons() {
	document.getElementById("rock").disabled = true;
	document.getElementById("paper").disabled = true;
	document.getElementById("scissors").disabled = true;
	document.getElementById("lizard").disabled = true;
	document.getElementById("spock").disabled = true;
}

function activateButtons() {
	document.getElementById("rock").disabled = false;
	document.getElementById("paper").disabled = false;
	document.getElementById("scissors").disabled = false;
	document.getElementById("lizard").disabled = false;
	document.getElementById("spock").disabled = false;
}
var myArray = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

function rock() {
	let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
	let rock = document.getElementById("user");
	rock.innerHTML = myArray[0];
	let result = document.getElementById("result");
	if (computer === myArray[0]) {
		result.innerHTML = "Draw";
	} else if (computer === myArray[1]) {
		result.innerHTML = "Lose";
	} else if (computer === myArray[2]) {
		result.innerHTML = "Win";
	} else if (computer === myArray[3]) {
		result.innerHTML = "Win";
	} else {
		result.innerHTML = "Lose";
	}
	incrementScore();
	levelUp();
	gameOver();
}

function paper() {
	let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
	let paper = document.getElementById("user");
	paper.innerHTML = myArray[1];
	let result = document.getElementById("result");
	if (computer === myArray[0]) {
		result.innerHTML = "Win";
	} else if (computer === myArray[1]) {
		result.innerHTML = "Draw";
	} else if (computer === myArray[2]) {
		result.innerHTML = "Lose";
	} else if (computer === myArray[3]) {
		result.innerHTML = "Lose";
	} else {
		result.innerHTML = "Win";
	}
	incrementScore();
	levelUp();
	gameOver();
}

function scissors() {
	let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
	let scissors = document.getElementById("user");
	scissors.innerHTML = myArray[2];
	let result = document.getElementById("result");
	if (computer === myArray[0]) {
		result.innerHTML = "Lose";
	} else if (computer === myArray[1]) {
		result.innerHTML = "Win";
	} else if (computer === myArray[2]) {
		result.innerHTML = "Draw";
	} else if (computer === myArray[3]) {
		result.innerHTML = "Win";
	} else {
		result.innerHTML = "Lose";
	}
	incrementScore();
	levelUp();
	gameOver();
}

function lizard() {
	let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
	let lizard = document.getElementById("user");
	lizard.innerHTML = myArray[3];
	let result = document.getElementById("result");
	if (computer === myArray[0]) {
		result.innerHTML = "Lose";
	} else if (computer === myArray[1]) {
		result.innerHTML = "Win";
	} else if (computer === myArray[2]) {
		result.innerHTML = "Lose";
	} else if (computer === myArray[3]) {
		result.innerHTML = "Draw";
	} else {
		result.innerHTML = "Win";
	}
	incrementScore();
	levelUp();
	gameOver();
}

function spock() {
	let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
	let spock = document.getElementById("user");
	spock.innerHTML = myArray[4];
	let result = document.getElementById("result");
	if (computer === myArray[0]) {
		result.innerHTML = "Win";
	} else if (computer === myArray[1]) {
		result.innerHTML = "Lose";
	} else if (computer === myArray[2]) {
		result.innerHTML = "Win";
	} else if (computer === myArray[3]) {
		result.innerHTML = "Lose";
	} else {
		result.innerHTML = "Draw";
	}
	incrementScore();
	levelUp();
	gameOver();
}

function incrementScore() {
    let wins = document.getElementById("wins");
    let score = document.getElementById("score");
    let result = document.getElementById("result");
    let loses = document.getElementById("loses");
	if (result.innerHTML === "Win") {
		++wins.innerHTML; ++score.innerHTML;
		result.style.color = "#1a9e00";
	} else if (result.innerHTML === "Lose") {
		++loses.innerHTML;
		result.style.color = "#dd2214";
	} else if (result.innerHTML === "Draw") {
		++loses.innerHTML;
		result.style.color = "rgb(199, 30, 241)";
	}
}

function levelUp() {
	let level = document.getElementById("level-number");
	let winCheck = document.getElementById("wins");
	let winCondition = 3;
	if (parseInt(winCheck.innerHTML) === winCondition) {
		++level.innerHTML;
		console.log(winCondition);
		document.getElementById("wins").innerHTML = 0;
	}
}

function reset() {
	let playAgain = document.getElementById("play-again");
	document.getElementById('computer').innerHTML = "COM";
	document.getElementById('result').innerHTML = "Vs";
	document.getElementById('user').innerHTML = "YOU";
	document.getElementById('wins').innerHTML = "0";
	document.getElementById('loses').innerHTML = "0";
	document.getElementById('score').innerHTML = "0";
	document.getElementById('level-number').innerHTML = "1";
	playAgain.style.display = "none";
	activateButtons();
}

function gameOver() {
	let loseCheck = document.getElementById("loses");
	let playAgain = document.getElementById("play-again");
	let score = document.getElementById("score");
	if (loseCheck.innerHTML > 9) {
		document.getElementById('computer').innerHTML = "GAME OVER";
		document.getElementById('result').innerHTML = "SCORE";
		document.getElementById('user').innerHTML = score.innerHTML;
		document.getElementById("play-again").innerHTML = "Play Again";
		playAgain.style.display = "block";
		disableButtons();
	}
}

function rules() {
	let instructions = document.getElementById("rule-list");
	instructions.style.visibility = "visible";
}