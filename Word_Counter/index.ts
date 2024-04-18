#! /usr/bin/env node

import inquirer from "inquirer";

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: "
    }
])

const words = answers.sentence.trim().split(" ")
console.log(words)


console.log(`Your Sentence word count is ${words.length}`)