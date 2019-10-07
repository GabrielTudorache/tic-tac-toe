let player1Turn = true;
let player1 = document.getElementById("player_1");
let player2 = document.getElementById("player_2");
let draws = document.getElementById("draws");
let clickCount = 0;
let player1WinCount = 0;
let player2WinCount = 0;
let drawsCount = 0;

function playTurn(elementId){

    let myButton = document.getElementById(elementId);
    
    if(clickCount === 8){
        alert("It's a draw! Re-starting");
        drawsCount++;
        draws.innerHTML = "Draws: " + " " + drawsCount
        clickCount = 0;        
        resetBoard();
        return;
    }

    if(myButton.innerHTML !== " - "){
        alert("Don't cheat!");
        return;
    }
    clickCount++;

    if(player1Turn){
        myButton.innerHTML = " X ";
    } else {
        myButton.innerHTML = " 0 ";
    }

    let button1 = document.getElementById("button_1").innerHTML;
    let button2 = document.getElementById("button_2").innerHTML;
    let button3 = document.getElementById("button_3").innerHTML;
    let button4 = document.getElementById("button_4").innerHTML;
    let button5 = document.getElementById("button_5").innerHTML;
    let button6 = document.getElementById("button_6").innerHTML;
    let button7 = document.getElementById("button_7").innerHTML;
    let button8 = document.getElementById("button_8").innerHTML;
    let button9 = document.getElementById("button_9").innerHTML;

    if(button1 !== " - " && button1 === button2 && button2 === button3){
        resetGameShowWinner();
        resetBoard();
    }
    if(button1 !== " - " && button1 === button4 && button4 === button7){
        resetGameShowWinner();
        resetBoard();
    }
    if(button1 !== " - " && button1 === button5 && button5 === button9){
        resetGameShowWinner();
        resetBoard();
    }
    if(button2 !== " - " && button2 === button5 && button5 === button8){
        resetGameShowWinner();
        resetBoard();
    }
    if(button3 !== " - " && button3 === button6 && button6 === button9){
        resetGameShowWinner();
        resetBoard();
    }
    if(button4 !== " - " && button4 === button5 && button5 === button6){
        resetGameShowWinner();
        resetBoard();
    }
    if(button7 !== " - " && button7 === button8 && button8 === button9){
        resetGameShowWinner();
        resetBoard();
    }
    if(button3 !== " - " && button3 === button5 && button5 === button7){
        resetGameShowWinner();
        resetBoard();
    }
    player1Turn = !player1Turn;
}

function resetGameShowWinner(){

    if(player1Turn){
        alert("Player1 Won!");
        player1WinCount++;
        clickCount = 0;
    } else {
        alert("Player2 Won!");
        player2WinCount++;
        clickCount = 0;
    }

    player1.innerHTML = "Player 1 wins:" + " " + player1WinCount;
    player2.innerHTML = "Player 2 wins:" + " " + player2WinCount;
    player1Turn = false;
}

function resetBoard(){
    let myButtons = document.getElementsByTagName("button");
    for(let i = 0; i < myButtons.length; i++){
        myButtons[i].innerHTML = " - ";
    }
}
