#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];
let condition = true;

async function addTodo() {
    const answers: {
        TODO: string,
        addmore: boolean
    } = await inquirer.prompt([
        {
            name: "TODO",
            type: "input",
            message: "What do you want to add in your todo?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    condition = addmore;
    if (TODO) {
        todos.push(TODO);
    } else {
        console.log(chalk.red("Kindly add valid input"));
    }
}

function viewTodos() {
    if (todos.length > 0) {
        console.log(chalk.blue("Your Todo List"));
        todos.forEach((todo, index) => {
            console.log(chalk.green(`${index + 1}. ${todo}`));
        });
    } else {
        console.log(chalk.yellow("No todos found"));
    }
}

async function updateTodo() {
    const answers: {
        index: number,
        newTodo: string
    } = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the todo you want to update:"
        },
        {
            name: "newTodo",
            type: "input",
            message: "Enter the new todo:"
        }
    ]);
    const { index, newTodo } = answers;
    if (todos[index - 1]) {
        todos[index - 1] = newTodo;
        console.log(chalk.green("Todo updated successfully!"));
    } else {
        console.log(chalk.red("Invalid index."));
    }
}

async function deleteTodo() {
    const answer: {
        index: number
    } = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the todo you want to delete:"
        }
    ]);
    const { index } = answer;
    if (todos[index - 1]) {
        todos.splice(index - 1, 1);
        console.log(chalk.green("Todo deleted successfully!"));
    } else {
        console.log(chalk.red("Invalid index."));
    }
}

async function viewFunction() {
    viewTodos();
}

async function main() {
    while (condition) {
        await addTodo();
    }

    if (todos.length > 0) {
        viewTodos();
        let action;
        do {
            action = await inquirer.prompt({
                name: "action",
                type: "list",
                message: "What do you want to do?",
                choices: ["View Todos", "Update Todo", "Delete Todo", "Exit"]
            });

            switch(action.action) {
                case "View Todos":
                    await viewFunction();
                    break;
                case "Update Todo":
                    await updateTodo();
                    break;
                case "Delete Todo":
                    await deleteTodo();
                    break;
                case "Exit":
                    console.log(chalk.blue("Exiting..."));
                    break;
                default:
                    console.log(chalk.red("Invalid action."));
            }
        } while(action.action !== "Exit");
    }
}

main();
