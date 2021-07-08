var myArray = ["Rock","Paper","Scissors","Lizard","Spock"];

function incrementScore(){
    if(result.innerHTML ==="you win"){++wins.innerHTML, ++score.innerHTML}
    else if (result.innerHTML ==="you lose"){++loses.innerHTML}
    else {alert="error"}
  
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
    else  { result.innerHTML= "draw"; }
    incrementScore(); 
}  