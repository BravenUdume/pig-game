document.getElementById("left").style.backgroundColor = "cyan";
document.getElementById("left").style.color = "brown";
// document.getElementById("hideButton").style.display = "none";
hideDice();
hideButtons();

function player1(){
    document.getElementById("start1").style.display = "none";
    document.getElementById("roll1").style.display = "none";
    document.getElementById("hold1").style.display = "none";

    document.getElementById("start").style.display = "block";
    document.getElementById("roll").style.display = "block";
    document.getElementById("hold").style.display = "block";
}
function player2(){
    document.getElementById("start").style.display = "none";
    document.getElementById("roll").style.display = "none";
    document.getElementById("hold").style.display = "none";

    document.getElementById("start1").style.display = "block";
    document.getElementById("roll1").style.display = "block";
    document.getElementById("hold1").style.display = "block";
}

function hideButtons(){
    document.getElementById("start1").style.display = "none";
    document.getElementById("roll1").style.display = "none";
    document.getElementById("hold1").style.display = "none";
}

function hideDice(){
    document.getElementById("hide_dice1").style.display = "none";
    document.getElementById("hide_dice2").style.display = "none";
    document.getElementById("hide_dice3").style.display = "none";
    document.getElementById("hide_dice4").style.display = "none";
    document.getElementById("hide_dice5").style.display = "none";
    document.getElementById("hide_dice6").style.display = "none";
}

// addScore();
// function addScore(){
//     let current = document.getElementById("current").innerHTML;
//     current = random + current;
//     console.log(current);
// }

function rollDice(){
    let random = Math.floor(Math.random() * 6) + 1;

    if(random === 1){
        hideDice();
        document.getElementById("hide_dice1").style.display = "block";}
    else if(random === 2){
    hideDice();
        document.getElementById("hide_dice2").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current").innerHTML = current;
    }
    else if(random === 3){
        hideDice();
        document.getElementById("hide_dice3").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current").innerHTML = current;
    }
    else if(random === 4){
        hideDice();
        document.getElementById("hide_dice4").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current").innerHTML = current;
    }
    else if(random === 5){
        hideDice();
        document.getElementById("hide_dice5").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current").innerHTML = current;
    }
    else if(random === 6){
        hideDice();
        document.getElementById("hide_dice6").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current").innerHTML = current;
    }
    else{
        return false;
    }
};
function rollDice2(){
    let random = Math.floor(Math.random() * 6) + 1;

    if(random === 1){
        hideDice();
        document.getElementById("hide_dice1").style.display = "block";}
    else if(random === 2){
    hideDice();
        document.getElementById("hide_dice2").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current1").innerHTML = 1;
    }
    else if(random === 3){
        hideDice();
        document.getElementById("hide_dice3").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current1").innerHTML = current;
    }
    else if(random === 4){
        hideDice();
        document.getElementById("hide_dice4").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current1").innerHTML = current;
    }
    else if(random === 5){
        hideDice();
        document.getElementById("hide_dice5").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current1").innerHTML = current;
    }
    else if(random === 6){
        hideDice();
        document.getElementById("hide_dice6").style.display = "block";

        let current = 0;
        current = random + current;
        document.getElementById("current1").innerHTML = current;
    }
    else{
        return false;
    }
};

function holdScore(){
    let total = parseInt(document.getElementById("total").innerHTML);
    let current = parseInt(document.getElementById("current").innerHTML);
    newTotal = total + current;
    document.getElementById("total").innerHTML = newTotal;

    document.getElementById("left").style.backgroundColor = "darkblue";
    document.getElementById("right").style.backgroundColor = "cyan";

    player2();
}
function holdScore2(){
    let total = parseInt(document.getElementById("total1").innerHTML);
    let current = parseInt(document.getElementById("current1").innerHTML);
    newTotal = total + current;
    document.getElementById("total1").innerHTML = newTotal;

    document.getElementById("right").style.backgroundColor = "darkblue";
    document.getElementById("left").style.backgroundColor = "cyan";

    player1();
}


document.getElementById("hold").onclick = 
function(){
    holdScore();
}

document.getElementById("roll").onclick = 
function(){
    rollDice();
}

document.getElementById("hold1").onclick = 
function(){
    holdScore2();
}

document.getElementById("roll1").onclick = 
function(){
    rollDice2();
}

document.getElementById("start").onclick = 
function(){
    window.location.reload();
}
document.getElementById("start1").onclick = 
function(){
    window.location.reload();
}