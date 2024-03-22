#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First NO:", type: "number", name: "FirstNo" },
    { message: "Enter your Second NO:", type: "number", name: "SecondNo" },
    { message: "Select the Operators to perform Operation:",
        type: "list",
        name: "operator",
        choices: ["Division", "Multiplication", "Addition", "Subtraction", "Modulus"] }
]);
if (answer.operator === "Division") {
    console.log(answer.FirstNo / answer.SecondNo);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNo * answer.SecondNo);
}
else if (answer.operator === "Addition") {
    console.log(answer.FirstNo + answer.SecondNo);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNo - answer.SecondNo);
}
else if (answer.operator === "Modulus") {
    console.log(answer.FirstNo % answer.SecondNo);
}
else {
    console.log("Please Enter a valid operator:");
}
