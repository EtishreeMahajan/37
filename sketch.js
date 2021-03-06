var gameState = 0;
var contestantCount, contestant;
var database;
var quiz, question;
var allContestants;
var answer = null;
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 20);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw() {
  background("pink");
  
  if(contestantCount === 4){
    quiz.update(1);
  }

  if(gameState === 1){
    quiz.play();
  }

}
