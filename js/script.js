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
  numOfQuestions: 10,
  answers: []
};

// GAME METHODS BELOW
/////////////////////

// start the game
app.playGame = function(){
  if(this.countriesUsed.length < this.numOfQuestions){
    app.getRandomCountry();
  } else {
    app.gameOver();
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
  if(app.countriesUsed.indexOf(`${randomCountry.country}`) >= 0 && app.countriesUsed.length > 0){
    app.getRandomCountry();
  } else {
    // use random country that has passed a used already validation
    $('.display-flag > img').attr('src', randomCountry.flag);
    app.currentRandomCountry = randomCountry.country;
    // push countries to arrays to keep track of questions asked
    app.countriesUsed.push(randomCountry.country);
    app.answers.push(randomCountry)
  }
}

// handle user input from input box
app.getUserAnswer = function(){
  let userAnswer = $('.game-controls input').val().toLowerCase();
  app.userAnswer = userAnswer;
  // add user answer to array of questions and answers
  index = app.answers.findIndex(x => x.country === app.currentRandomCountry);
  app.answers[index].userAnswer = userAnswer;
  $('.game-controls input').val('');
}


// update score on screen 
app.updateScore = function(score){
  $('.display-scoreboard .score').text(
    `Score: ${score.correct} / ${score.correct + score.incorrect}`
  );
}
  
// create and display answers/score on game over screen
app.displayResult = function(answers){
  // display score 
  $('.result-display-score').text(
    `You got ${app.userScore.correct} out of ${app.numOfQuestions} countries correct.`
  );
  // display each question with correct answer and user answer
  answers.forEach(answer => {
    $('.result-display ul').append(`
    <li>
    <div class="result-flag-container">
    <img src=${answer.flag}>
    </div>
    <div class="result-display-answers">
    <p>Correct: <span>${answer.country}</span></p>
    <p>Answer: <span>${answer.userAnswer}</span></p>
    </div>
    </li>
  `);
  });
}

// reset game object function
app.resetGame = function(){
  app.countriesUsed = [];
  app.userScore = {
    correct: 0,
    incorrect: 0
  };
  app.userAnswer = '';
  app.currentRandomCountry = '';
  app.numOfQuestions = 10;
  app.answers = []
  $('.result-display ul').empty();
  $('.display-scoreboard .score').text('Score: ');
  $('.game-controls input').val('');
}

// play again function
app.playAgain = function(){
  $('.result').css('display', 'none');  
  app.resetGame();
  app.playGame();
}

// game over function
app.gameOver = function(score){
  $('.result').css('display', 'flex');
  app.displayResult(app.answers);
}

// start game from welcome screen function
app.startGame = function(){
  let num = $('.welcome-start input').val();
  app.numOfQuestions = num;
  app.playGame();
}
// EVENT LISTENERS BELOW
////////////////////////

// event listener for form submission
$('.game-controls form').on('submit', function(e){
  e.preventDefault();
  app.getUserAnswer();
  app.checkAnswer();
  app.playGame()
});

// event listener for play again button
$('.play-again').on('click', app.playAgain);
