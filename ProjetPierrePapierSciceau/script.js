let playerScore=0
let computerScore=0

let computerSelection= computerPlay();

function computerPlay(){
    let nombre= Math.floor(Math.random()*3)+1
    if(nombre===1){
        return "pierre"
    }else if(nombre===2){
       return "papier"
    }else{
        return "sciceau"
    }
}



function playRound(playerSelection,computerSelection){

    if((playerSelection==="pierre") && (computerSelection==="pierre")){
        console.log("personne n'a gagné")
        playerScore+=0
        computerScore+=0
    }else if(playerSelection==="papier" && computerSelection==="papier"){
        console.log("personne n'a gagné")
        playerScore+=0
        computerScore+=0
    }else if(playerSelection==="sciceau" && computerSelection==="sciceau"){
        console.log("personne n'a gagné")
        playerScore+=0
        computerScore+=0
    }else if(playerSelection==="sciceau" && computerSelection==="papier"){
        console.log("Tu as gagné! le sciceau bat le papier ")
        playerScore+=1
        computerScore+=0
    }else if(playerSelection==="pierre" && computerSelection==="sciceau"){
        console.log("Tu as gagné! la pierre bat le sciceau ")
        playerScore+=1
        computerScore+=0
    }else if(playerSelection==="papier" && computerSelection==="pierre"){
        console.log("Tu as gagné! le papier bat la pierre ")
        playerScore+=1
        computerScore+=0
    }else if(playerSelection==="pierre" && computerSelection==="papier"){
        console.log("Tu as perdu! le papier bat la pierre ")
        playerScore+=0
        computerScore+=1
    }else if(playerSelection==="sciceau" && computerSelection==="pierre"){
        console.log("Tu as perdu! la pierre bat le sciceau ")
        playerScore+=0
        computerScore+=1
    }else if(playerSelection==="papier" && computerSelection==="sciceau"){
        console.log("Tu as perdu! le sciceau bat le papier ")
        playerScore+=0
        computerScore+=1
    }
}

function game(){
    for(let i=1;i<=5;i++){
       let playerSelection = prompt("Veuillez saisir entre pierre,papier ou sciceau")
       console.log(playRound(playerSelection,computerSelection))   
    }
    win(playerScore,computerScore)
   
}

function win(scoreJoueur,computerScore){
    if(scoreJoueur>computerScore){
        console.log("Felicitation vous avez gagné la partie")
    }else if(scoreJoueur<computerScore){
        console.log("Désolé mais vous avez perdue la partie")
    }else{
        console.log("personne n'a gagné")
    }
}






console.log(game())





