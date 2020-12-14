var readlineSync = require('readline-sync')

const chalk = require('chalk');

score = 0;
var gameAnswer = readlineSync.question(chalk.red("Lets play a game!"))

console.log(chalk.yellow("Chalo " + gameAnswer + " dialog complete karte hain."))

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log(chalk.green("Sahi jawaab!"))
    score++;
    console.log("Aapka score hain",score)
    console.log("-----------------")

  }

  else {
    console.log(chalk.red("Maaf kijeye aap galat hain!"))
    console.log("Aapka score hain",score)
    console.log("-----------------")
  }
  
}

var dialogs = [{
  question:"Our Buisness is ____ buisness, none of your buisness.",
    a:"our",
    b:"your",
    c:"other",
  answer: "a"
  },{
  question:"Raashi ne cooker main se ____ nikal diye, aur khali cooker gas pe chadha diya.",
    a:"aaloo",
    b:"channe",
    c:"chawal",
  answer: "b"
},{
  question:"joey doesn't share ____",
  a:"fridge",
  b:"girlfriend",
  c:"food",
  answer:"c"
},{
  question:"Kaun kambhakt ____ karne ko pita hain!",
  a:"maze",
  b:"bardhast",
  c:"fukat",
  answer: "b"
  
}]

for(var i = 0; i < dialogs.length; i++){
  
}