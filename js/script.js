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

// checks answer and updates score after check
app.checkAnswer = function(){
  if(app.currentRandomCountry === app.userAnswer){
    app.userScore.correct += 1;
    app.updateScore(this.userScore);
  } else {
    app.userScore.incorrect += 1;
    app.updateScore(this.userScore);
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
  let randomCountry = countries[randomNumber]
  // check that country has not been used yet
  console.log(this.countriesUsed.indexOf(randomCountry));
  console.log(this.countriesUsed.length);
  if(this.countriesUsed.indexOf(randomCountry) >= 0 && this.countriesUsed.length > 0){
    app.getRandomCountry();
  }
  // use random country that has passed a used already validation
  $('.display-flag > img').attr('src', randomCountry.flag);
  app.currentRandomCountry = randomCountry.country;
  app.countriesUsed.push(randomCountry.country);
}

// handle user input from input box
app.getUserAnswer = function(){
  let userAnswer = $('.game-controls input').val().toLowerCase();
  console.log(userAnswer);
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

// update score on screen 
app.updateScore = function(score){
  $('.display-scoreboard .score').text(
    `Score: ${score.correct} / ${score.correct + score.incorrect}`
  );
}

