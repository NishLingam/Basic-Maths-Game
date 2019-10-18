var questionNumber0, questionNumber1, answerRandomizer, correctAnswer, wrongAnswerNo, wrongAnswer, score;

init();

// Function to apply to take user to the next round

function nextRound() {
    questionNumber0 = Math.floor(Math.random()*100);
    questionNumber1 = Math.floor(Math.random()*100);

    document.querySelector('.question-box').textContent = questionNumber0 + ' + ' + questionNumber1;

    answerRandomizer = Math.floor(Math.random()*2);
    wrongAnswerNo = (answerRandomizer + 1) % 2;

    correctAnswer = '.answer' + answerRandomizer;
    wrongAnswer = '.answer' + wrongAnswerNo;

    document.querySelector(correctAnswer).style.background = 'rgb(158, 158, 250)';
    document.querySelector(wrongAnswer).style.background = 'rgb(158, 158, 250)';

    

    document.querySelector(correctAnswer).textContent = questionNumber0 + questionNumber1;
    document.querySelector(wrongAnswer).textContent = Math.floor(Math.random()*200);; 
}

// Changes to occur once an answer has been selected

// If first answer is correct

document.querySelector('.answer0').addEventListener('click', function() {

    if (correctAnswer === '.answer0') {
        document.querySelector(correctAnswer).style.background = 'rgb(89, 211, 89)';
        score ++;
        document.querySelector('.score-box').textContent = 'Score: ' + score;
        setTimeout(nextRound, 100);
    } else {
        document.querySelector(wrongAnswer).style.background = 'red';    
        document.querySelector('.game-over').style.color = 'red';
        score = 0;
        document.querySelector('.score-box').textContent = 'Score: ' + score;
        setTimeout(init, 1000);
    }
});

// If second answer is correct 

document.querySelector('.answer1').addEventListener('click', function() {
    if (correctAnswer === '.answer1') {
        document.querySelector(correctAnswer).style.background = 'rgb(89, 211, 89)';
        score ++;
        document.querySelector('.score-box').textContent = 'Score: ' + score;
        setTimeout(nextRound, 100);
    } else {
        document.querySelector(wrongAnswer).style.background = 'red';
        score = 0;
        document.querySelector('.score-box').textContent = 'Score: ' + score;
        document.querySelector('.game-over').style.color = 'red';
        setTimeout(init, 1000);
    }
});

//1 minute timer

document.querySelector('.timer').innerHTML =
  001 + ':' + 000;
startTimer();

function startTimer() {
  var presentTime = document.querySelector('.timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  
  document.querySelector('.timer').innerHTML =
    m + ':' + s;
  if(m<0){
    document.querySelector('.game-over').style.color = 'red';
    setTimeout(init, 1000);
  }
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = '0' + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = '59'};
  return sec;
}







function init() {
    questionNumber0 = Math.floor(Math.random()*100);
    questionNumber1 = Math.floor(Math.random()*100);
    score = 0;


    document.querySelector('.question-box').textContent = questionNumber0 + ' + ' + questionNumber1;

    answerRandomizer = Math.floor(Math.random()*2);
    wrongAnswerNo = (answerRandomizer + 1) % 2;

    correctAnswer = '.answer' + answerRandomizer;
    wrongAnswer = '.answer' + wrongAnswerNo;

    document.querySelector(correctAnswer).textContent = questionNumber0 + questionNumber1;
    document.querySelector(wrongAnswer).textContent = Math.floor(Math.random()*200);;   

    document.querySelector(correctAnswer).style.background = 'rgb(158, 158, 250)';
    document.querySelector(wrongAnswer).style.background = 'rgb(158, 158, 250)';
    document.querySelector('.game-over').style.color = 'white';
    document.querySelector('.score-box').textContent = 'Score: ' + score;
    document.querySelector('.timer').innerHTML = 001 + ':' + 000;

}