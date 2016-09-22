/*var cards = ['block', 'block', 'circle', 'circle', 'triangle', 'triangle', 'square', 'square', 'cilinder', 'cilinder', 'plain', 'plain', 'cube', 'cube', 'sphere', 'sphere', 'ball', 'ball', 'pentagram', 'pentagram'];

//stats
var score = 0;
var attempts = 10;

//card storage
var selected = [null, null];
var tot = selected.length;
var nSelected = 0;
var toRemove = [];

//call shuffle function, assign cards, shw cards and hide button
function initGame() {
    document.getElementById('start').style.display="none";
    shuffleCards(cards);
    for(var i = 0; i < nCards; i++) {
        document.getElementById(String(i)).className += " " + cards[i];
        document.getElementById("content-" + String(i)).innerHTML = cards[i];
        document.getElementById(String(i)).style.display="inline-block";
    }
    document.getElementById('reset').style.display="block";
    stats();
}

//shuffle cards
function shuffleCards(array) {
    for(var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//add select class if not selected, otherwise remove class
function select(ID) {
    selectBlock: {
        if(document.getElementById(ID).className.match(/(?:^|\s)selected(?!\S)/)) {
            document.getElementById(ID).className = document.getElementById(ID).className.replace(/(?:^|\s)selected(?!\S)/g, '');
            document.getElementById('content-' + ID).style.display="none";
            for(var i = 0; i < tot; i++) {
                if(selected[i] === ID) {
                    selected[i] = null;
                    nSelected--;
                }
            }
        } else {
            for(var i = 0; i < tot; i++) {
                if(selected[i] === null) {
                    document.getElementById(ID).className += " selected";
                    document.getElementById('content-' + ID).style.display="inline-block";
                    selected[i] = ID;
                    nSelected++;
                    selectionCheck();
                    break selectBlock;
                }
            }
        }
    }
}

//check if two cards have been selected, if the cards match call remove function, otherwise empty select
function selectionCheck() {
    if(nSelected === selected.length) {
        if(document.getElementById(selected[0]).className === document.getElementById(selected[1]).className) {
            toRemove[0] = selected[0];
            toRemove[1] = selected[1];
            setTimeout(selectionRemove, 500);
        }
        else {
            setTimeout(selectionEmpty, 500);
            score--;
            attempts--;
            if(attempts === 0) {
                setTimeout(gameover('lose'), 600);
            }
        }
        setTimeout(stats, 500);
    }
}

//remove the cards that are set in the array
function selectionRemove() {
    for(var i = 0; i < tot; i++) {
        document.getElementById(toRemove[i]).style.display="none";
    }
    nCards = nCards - 2;
    score++;
    selectionEmpty();
    if(nCards === 0) {
        setTimeout(gameover('win'), 600);
    }
}

//empty the selection variables and unselect the selected cards
function selectionEmpty() {
    for(var i = 0; i < tot; i++) {
        document.getElementById(selected[i]).className = document.getElementById(selected[i]).className.replace(/(?:^|\s)selected(?!\S)/g, '');
        document.getElementById('content-' + selected[i]).style.display="none";
        selected[i] = null;
        nSelected = 0;
    }
}

//hide the cards and show the end message
function gameover(type) {
    document.getElementById('cards').style.display="none";
    document.getElementById('message').style.display="block";
    var message;
    if(type === 'win') {
        message = "Congratulations! You have won!<br>Click the button below to play again";
    } else if (type === 'lose') {
        message = "Game over<br>Click the button below to try again"
    }
    document.getElementById('message').innerHTML= message;
}

//update the stats
function stats() {
    document.getElementById('nCards').innerHTML = "Number of remaining cards: " + nCards;
    document.getElementById('score').innerHTML = "Your score is: " + score;
    document.getElementById('attempts').innerHTML = "Lives left: " + attempts;
}*/