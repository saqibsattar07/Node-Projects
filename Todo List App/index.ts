#! /usr/bin/env node

import inquirer from "inquirer";

let todos: string[]= [];
let condition = true;

while(condition) {
    const answers : {
        TODO: string,
        addmore: boolean
    }= await inquirer.prompt([
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
    ])
    const {TODO, addmore} = answers;
    condition = addmore
    if(TODO) {
       todos.push(TODO)
    } else {
        console.log("Kindly add valid input");
    }
    
}

if(todos.length > 0) {
    console.log("Your Todo List");
    todos.forEach((todo) => {
        console.log(todo);
    })
} else {
    console.log("No todos found");
}