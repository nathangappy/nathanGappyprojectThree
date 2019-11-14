// Array of country objects kept in './data/countries'

// initialize app
// welcome screen/start game option
// user clicks start game and game starts
// user is shown 1st of 10 random country flags
// user has input prompt to guess the name of the flags country
// score is updated based on correct/incorrect answer
// game continues
// user is presented with a score screen 

// start game on load
$(document).ready(function(){
  app.playGame();
});

// game object
const app = {
  countriesUsed: [],
  userScore: {
    correct: 0,
    incorrect: 0
  },
  userAnswer: '',
  currentRandomCountry: '',
  numOfQuestions: 10
};

// start the game
app.playGame = function(){
  console.log(app.countriesUsed, app.userScore);
  if(this.countriesUsed.length < this.numOfQuestions){
    app.getRandomCountry();
  } else {
    console.log(`you got ${app.userScore.correct} right and ${app.userScore.incorrect} wrong`);
  }
}

// make comparison and updates score
app.checkAnswer = function(){
  if(app.currentRandomCountry === app.userAnswer){
    app.userScore.correct += 1;
    console.log('thats fucking right!')
  } else {
    app.userScore.incorrect += 1;
    console.log('thats fucking wrong!')
  }
}

// get random number
app.getRandomNumber = function(){
  let randomNumber = Math.floor(Math.random() * countries.length);
  return randomNumber;
}

// get and display random flag image
app.getRandomCountry = function(){
  let randomNumber = app.getRandomNumber();
  let randomCountry = countries[randomNumber];
  $('.display-flag > img').attr('src', randomCountry.flag);
  app.currentRandomCountry = randomCountry.country;
  app.countriesUsed.push(randomCountry.country);
}

// handle user input
app.getUserAnswer = function(){
  let userAnswer = $('.game-controls input').val();
  app.userAnswer = userAnswer;
  $('.game-controls input').val('');
}

// event listener for form submission
$('form').on('submit', function(e){
  e.preventDefault();
  app.getUserAnswer();
  app.checkAnswer();
  app.playGame()
});
