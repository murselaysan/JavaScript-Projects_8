var dealerCards = [];
var playerCards = [];
var firstDeck = [];

function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

function createShuffledDeckNumber(array, x) { 
  for (i = 0; i < 4*x; i++) {
  array.push(1,2,3,4,5,6,7,8,9,10,11,12,13);
   } 
  shuffle(array);
}

function drawCard(playersHand, playerSoft, playerHard) {
  playersHand.push(firstDeck[0]);
  firstDeck.shift();
}

function checkDeckDrawOne(playersHand) {
  if (firstDeck.length === 0) {
    createShuffledDeckNumber(firstDeck, 1);
    drawCard(playersHand);
  }else{
    for (let i = 0; i < 1; i++) {
      drawCard(playersHand);
    }
  }
}

for (i = 0; i < 4; i++) {
dealerCards = [];
playerCards = [];
checkDeckDrawOne(dealerCards);
checkDeckDrawOne(dealerCards); 
checkDeckDrawOne(playerCards);
checkDeckDrawOne(playerCards);
console.log("dealerCards",dealerCards,"playerCards",playerCards);
console.log("firstDeckDrawn", firstDeck, "Number", firstDeck.length);
}