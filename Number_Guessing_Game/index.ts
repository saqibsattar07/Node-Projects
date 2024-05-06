#! /usr/bin/evn node

import inquirer from "inquirer";

// 1) The Computer will produce a random number
// 2) The user will guess the number
// 3) Match the user input with the randomly generated number from the computer and display the outcome

const randomNumber = Math.floor(Math.random() * 15 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Predict the number within the range of 1 to 15"
    }
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("You guessed the Wrong Number.");
}