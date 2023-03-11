var userInput = document.querySelector('.userInput')
// console.log(userInput)

var guessBtn = document.querySelector('.guessBtn')
// console.log(guessBtn)

var score = document.querySelector('.score')
// console.log(score)

var displayMsg = document.querySelector('.displayMsg')

// console.log(myNumber)

let chance = 5;

guessBtn.addEventListener('click', () => {
    chance--;
    
    var myNumber = Math.round(Math.random()*20)
    if(userInput.value == myNumber){
        displayMsg.textContent = "Congratulation you guess a correct number" 
    }else if(userInput.value > myNumber){
        displayMsg.textContent = " your guess is greater then actual number" 
        score.textContent = chance;


    }else if(userInput.value < myNumber){
        displayMsg.textContent = " your guess is less then actual number" 
               score.textContent = chance;

    }
    if(chance == 0){
        displayMsg.textContent = " Please Try Again!" 

    }else if(chance < 0){
        window.location.reload()
    }
}
)