
let player ={
  playerName: "Kraidy",
  playerChips : 45
}
 let cards = []//Array - ordered list of item

 let sum = 0 
// sum = firstCard + secondCard
 let hasBlackJack = false
  let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl =  document.getElementById("player-el")
playerEl.textContent = player.playerName + ": $" + player.playerChips


//getting random card function which gives the player first two card random
function getRandomCard(){
   let randomNumber = Math.floor( Math.random() * 13) + 1
  if ( randomNumber > 10){
    return 10
  } else if (randomNumber === 1){
    return 11
  }else{
    return randomNumber
  }
}
//start game function
function startGame(){
isAlive = true  //boolean
let randomNumber = Math.floor(Math.random()* 13)  + 1  //getting random number using (math.random)
let firstCard = getRandomCard()
let secondCard =  getRandomCard()
cards = [firstCard,secondCard]  
sum = firstCard + secondCard
sumEl.textContent = "Sum: " + sum  
renderGame(
)
} 
//start game function
 function renderGame(){
cardsEl.textContent = "Cards:"
for (let i = 0; i < cards.length; i++){
cardsEl.textContent += cards[i] + " "
} 
//using if else statement
  if(sum <= 20 ){
    message="Nice attempt but you can draw a new card?🧧✨"
  } else if( sum === 21){
    message="Wohoo!Congratulations buddy🤩 You've got a blackjack!✨🎉 "
  hasBlackJack = true
  } else if (sum > 21){
    message="Awwwwn sorry! You are out of the game!😏😣 Try again😪"
    isAlive=false
  }
  messageEl.textContent= message
}
function newCard(){          //new card function
if(isAlive === true && hasBlackJack === false ){  //using logical operations which doesn't allow the user to get another we he is ou of the game
  let thirdCard = getRandomCard() //calling the 
  sum += thirdCard
  cards.push(thirdCard)            //setting an array to push the third card to the cards array
  console.log(cards)
  sumEl.textContent = "Sum: " + sum  
  renderGame()
}
}


 
 