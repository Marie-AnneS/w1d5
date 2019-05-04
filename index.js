var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message2 = "Yo" + chalk.blue.bgWhite.bold("touÉ!");
console.log(message2);