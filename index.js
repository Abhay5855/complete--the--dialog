var readlineSync = require('readline-sync')

const chalk = require('chalk');

score = 0;
var gameAnswer = readlineSync.question(chalk.red("Lets play a game!"))

console.log(chalk.yellow("Chalo " + gameAnswer + " dialog complete karte hain."))

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log(chalk.green("Sahi jawaab!"))

  }
  
}