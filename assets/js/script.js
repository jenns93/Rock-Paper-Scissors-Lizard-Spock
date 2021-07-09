var myArray = ["Rock","Paper","Scissors","Lizard","Spock"];
function rock(){
    let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
    let rock = document.getElementById("user");
    rock.innerHTML = document.getElementById("rock").innerHTML;
    let result = document.getElementById("result");
    if (computer === myArray[0]) { result.innerHTML= "Draw"; }
    else if (computer === myArray[1]) { result.innerHTML= "you lose"; }
    else if (computer === myArray[2]) { result.innerHTML= "you win"; }
    else if (computer === myArray[3]) { result.innerHTML= "you win"; }
    else  { result.innerHTML= "you lose"; }
    incrementScore(); 
    levelUp();
    gameOver();
}  
function paper(){
    let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
    let paper = document.getElementById("user");
    paper.innerHTML = document.getElementById("paper").innerHTML;
    let result = document.getElementById("result");
    if (computer === myArray[0]) { result.innerHTML= "you win"; }
    else if (computer === myArray[1]) { result.innerHTML= "Draw"; }
    else if (computer === myArray[2]) { result.innerHTML= "you lose"; }
    else if (computer === myArray[3]) { result.innerHTML= "you lose"; }
    else  { result.innerHTML= "you win"; }
    incrementScore(); 
    levelUp();
    gameOver();
}  
function scissors(){
    let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
    let scissors = document.getElementById("user");
    scissors.innerHTML = document.getElementById("scissors").innerHTML;
    let result = document.getElementById("result");
    if (computer === myArray[0]) { result.innerHTML= "you lose"; }
    else if (computer === myArray[1]) { result.innerHTML= "you win"; }
    else if (computer === myArray[2]) { result.innerHTML= "Draw"; }
    else if (computer === myArray[3]) { result.innerHTML= "you win"; }
    else  { result.innerHTML= "you lose"; }
    incrementScore(); 
    levelUp();
    gameOver();
}  
function lizard(){
    let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
    let lizard = document.getElementById("user");
    lizard.innerHTML = document.getElementById("lizard").innerHTML;
    let result = document.getElementById("result");
    if (computer === myArray[0]) { result.innerHTML= "you lose"; }
    else if (computer === myArray[1]) { result.innerHTML= "you win"; }
    else if (computer === myArray[2]) { result.innerHTML= "you lose"; }
    else if (computer === myArray[3]) { result.innerHTML= "Draw"; }
    else  { result.innerHTML= "you win"; }
    incrementScore(); 
    levelUp();
    gameOver();
}  
function spock(){
    let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
    let spock = document.getElementById("user");
    spock.innerHTML = document.getElementById("spock").innerHTML;
    let result = document.getElementById("result");
    if (computer === myArray[0]) { result.innerHTML= "you win"; }
    else if (computer === myArray[1]) { result.innerHTML= "you lose"; }
    else if (computer === myArray[2]) { result.innerHTML= "you win"; }
    else if (computer === myArray[3]) { result.innerHTML= "you lose"; }
    else  { result.innerHTML= "Draw"; }
    incrementScore(); 
    levelUp();
    gameOver();
}  

function incrementScore(){
    if(result.innerHTML ==="you win"){++wins.innerHTML, ++score.innerHTML}
    else if (result.innerHTML ==="you lose"){++loses.innerHTML}
    else {alert="error"}
  }
  function levelUp(){
    let level = document.getElementById("level-number")
    let winCheck = document.getElementById("wins").innerHTML;
    if(winCheck === "3"){++level.innerHTML
    document.getElementById("wins").innerHTML=0;
    document.getElementById("loses").innerHTML=0;
    } 
  }
    function reset(){
      let playAgain = document.getElementById("play-again")
        document.getElementById('computer').innerHTML="Computer";
        document.getElementById('result').innerHTML="Vs"; 
        document.getElementById('user').innerHTML="You";
        document.getElementById('wins').innerHTML="0";
        document.getElementById('loses').innerHTML="0";
        document.getElementById('score').innerHTML="0";
        document.getElementById('level-number').innerHTML="1";
        playAgain.style.display = "none";
      }
      function gameOver(){
        let loseCheck = document.getElementById("loses").innerHTML;
        let playAgain = document.getElementById("play-again")
        if (loseCheck >3){
          document.getElementById('computer').innerHTML="GAME OVER";
          document.getElementById('result').innerHTML="SCORE"; 
          document.getElementById('user').innerHTML=score.innerHTML;
          playAgain.style.display = "block";
        }
      }
      function rules(){
        let intructions = document.getElementById('rule-list');
        intructions.innerHTML = `<h4>How to play</h4>
             <p>Scissors decapitate Scissors cuts paper,<br>
              paper covers rock, rock crushes lizard,<br>
              lizard poisons Spock, Spock smashes scissors,<br>
               scissors decapitates lizard, lizard eats paper,<br> 
              paper disproves Spock, Spock vaporizes rock,<br>
               and as it always has, rock crushes scissors.
             </p>`;
     }
     