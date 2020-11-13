let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let dealerCards = [];
let playerCards = [];
let firstDeck = [];


function shuffle(arr){
  for(let i = arr.length-1; i>=0; i--){
    let j = Math.floor(Math.random() * i)
    let x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

function createShuffledDeckNumber(array, x) { 
  for (i = 0; i < x; i++) {
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
    //for (let i = 0; i < 1; i++) {
      drawCard(playersHand);
    //}
  }
}

//for (i = 0; i < 4; i++) {
dealerCards = [];
playerCards = [];
checkDeckDrawOne(dealerCards);
checkDeckDrawOne(dealerCards); 
checkDeckDrawOne(playerCards);
checkDeckDrawOne(playerCards);
console.log("dealerCards",dealerCards,"playerCards",playerCards);
console.log("firstDeckDrawn", firstDeck, "Number", firstDeck.length);
//}