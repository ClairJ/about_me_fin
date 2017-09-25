'use strict';

var userName = prompt('Welcome! What is your name?');
console.log('Username is ' + userName);
alert('Please answer in true or false.')
var score = 0;
var questions = ['Alrighty ' + userName + ' Is my all time favorite food lasagna?','Sweet ' + userName + ' Do I jam out to Katy Perry?','Is my female dog\'s name Gizmo?','Rick and Morty?','Do I enjoy long hikes on the horizon?'];

var correct = ['You would make Garfield proud!','Do you ever feel, like a plastic bag? flowing through the wind','She is the greatest... Yes, she!','Wubalubadubdub','You know me to well and it\'s starting to get weird'];

var incorrect = ['wow, just wow. You\'re dead wrong but keep going I guess.','It was Katy Perry... How could you not guess Katy Perry?','The Bio is a pretty important page...','Start today, you\'re missing out','Hiking is the last thing I would ever do, even if theres a fire!'];

var answers = ['true','true','true','true','false'];

var x = 0;

/*var rano = Math.floor((Math.random() * 256) + 1)
console.log('random number ' + rano);*/
function functionTest () {
  for (var i = 0; i < questions.length; i++); {
    console.log('score is ' + score);
    var question1 = prompt(questions[x]).toLowerCase();
    console.log('A1 is ' + question1);
    if (question1 === answers[x]) {
      alert(correct[x]);
      score ++;
      console.log('score is ' + score);
    } else {
      alert(incorrect[x]);
    }
    x++;
    console.log('value of x is ' + x);
  }
}

functionTest();


/*
function questionOne () {
  console.log('score is ' + score)
  var question1 = prompt(questions[x]).toLowerCase();
  console.log('A1 is ' + question1)
  if (question1 === 'yes' || question1 === 'y') {
    alert(correct[x]);
    score ++;
    console.log('score is ' + score)
  } else {
    alert(incorrect[x]);
  }
  x++;
  console.log('value of x is ' + x)
}

function questionTwo (){
  var question2 = prompt(questions[x]).toLowerCase();
  console.log('A2 is ' + question2)
  if (question2 === 'yes' || question2 === 'y') {
    alert(correct[x]);
    score ++;
    console.log('score is ' + score)
  } else {
    alert(incorrect[x]);
  }
  x++;
}


function questionThree () {
  var question3 = prompt(questions[x]).toLowerCase();
  console.log('A3 ' + question3)
  if (question3 === 'yes' || question3 === 'y') {
    alert(correct[x])
    score ++;
    console.log('score is ' + score)
  } else {
    alert(incorrect[x])
  }
  x++;
}

function questionFour () {
  var question4 = prompt(questions[x]).toLowerCase();
  console.log('A4 ' + question4)
  if (question4 === 'yes' || question4 === 'y') {
    alert(correct[x]);
    score ++;
    console.log('score is ' + score)
  } else {
    alert(incorrect[x]);
  }
  x++;
}

function questionFive () {
  var question5 = prompt(questions[x]).toLowerCase();
  console.log('A5 ' + question5)
  if (question5 === 'no' || question5 === 'n') {
    alert(correct[x]);
    score ++;
    console.log('score is ' + score)
  } else {
    alert(icorrect[x]);
  }
  x++;
}
*/
function questionSix () {
  var age = '21';
  for (var i = 0; i <= 4; i++) {
    var age = '21';
    var question6 = prompt('How old am I?').toLowerCase();
    console.log('A6 ' + question6);
    if(question6 === age || question6 === 'twentyone') {
      alert('Yes, BUT I still have a lot of maturing to do.');
      i+=4;
      score++;
      console.log('score is ' + score)
    } else if (question6 < '21'){
      alert('ouch a little higher');
    } else if (question6 > '21'){
      alert('bring it back down to the 20 range');
    } else {
      alert('What? no. that\s not even a number!')
    }
  }
}


  //WIP

function questionSeven () {
  var guesses = 6
  var country = ['japan', 'usa', 'mexico', 'canada'];
  while(guesses > 0) {
    var question7 = prompt('Guess a country I have been to').toLowerCase();
    console.log('A7 ' + question7);
    guesses --;
    for (var i = 0; i < country.length; i++) {
      console.log(country);
      if (question7 === country[i]) {
        alert('Sweet! I\'ve been to Japan, Canada, USA, and Mexico.');
        guesses= -1;
        score++;
        console.log('score is ' + score)
        break;
      }
    }
    if (guesses > 0) {
      alert('Nope that is not a correct answer you have ' + guesses + ' guesses remaining')
    }
    if (guesses === 0) {
      alert('Sorry, you are out of guesses. My previous countries are Japan, Canada, USA, and Mexico')
    }

  }
}
questionSix();
questionSeven();
alert('You got ' + score + ' out of 7!!!!!');

// too many questions
/*
var question7 = prompt('Have I ever seen a camel?').toLowerCase();
console.log('A7 ' + question7)
if (question6 === 'no' || question6 === 'n') {
alert('Nice, they actually terrify me and you\'re starting to as well.');
score ++;
console.log('score is ' + score)
} else {
alert('Never have and never will. They terrify me.');
}
*/
/*
var question8 = prompt('Am I addicted to building computers?').toLowerCase();
console.log('A8 ' + question8)
if (question8 === 'yes' || question8 === 'y') {
alert('Yes! My apt has banned my packages from being sent to the office');
score ++;
console.log('score is ' + score)
} else {
alert('It would be highly likely that if were all here for software development that a majority of us would love computers!');
}
*/
/*
var question9 = prompt('Dogs?').toLowerCase();
console.log('A9 is ' + question9)
if (question9 === 'yes' || question9 === 'y') {
alert('Gizmo is everything to me, right under lasagna');
score ++;
console.log('score is ' + score)
} else {
alert("You didn't read the bio");
}
*/
