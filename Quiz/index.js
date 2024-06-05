#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const questions = [
    {
        question: 'Which type is assigned to an uninitialized variable in TypeScript?',
        choices: ['number', 'string', 'undefined', 'null'],
        correctAnswer: 'undefined',
    },
    {
        question: 'How do you define an array of numbers in TypeScript?',
        choices: ['number[]', 'Array<number>', 'Both', 'None'],
        correctAnswer: 'Both',
    },
    {
        question: 'What keyword is used to define a constant variable in TypeScript?',
        choices: ['var', 'let', 'const', 'constant'],
        correctAnswer: 'const',
    },
    {
        question: 'How do you specify the type for a function parameter in TypeScript?',
        choices: [':', '::', '=>', ':='],
        correctAnswer: ':',
    },
    {
        question: 'What is the output type of a function that doesn\'t return a value?',
        choices: ['void', 'undefined', 'null', 'any'],
        correctAnswer: 'void',
    },
    {
        question: 'Which of the following is a correct way to define an interface in TypeScript?',
        choices: [
            'interface Person { name: string; age: number; }',
            'interface Person = { name: string, age: number }',
            'Person : interface { name: string; age: number; }',
            'Person = { name: string; age: number; }',
        ],
        correctAnswer: 'interface Person { name: string; age: number; }',
    },
    {
        question: 'How do you import a module in TypeScript?',
        choices: [
            'import { moduleName } from "module";',
            'require("module")',
            'include "module";',
            'using module "module";',
        ],
        correctAnswer: 'import { moduleName } from "module";',
    },
    {
        question: 'What is the TypeScript syntax for declaring a tuple type?',
        choices: ['[string, number]', '(string, number)', '{string, number}', '<string, number>'],
        correctAnswer: '[string, number]',
    },
    {
        question: 'How do you specify optional properties in TypeScript?',
        choices: ['propertyName?: type', 'propertyName: type?', 'propertyName!: type', 'propertyName: ?type'],
        correctAnswer: 'propertyName?: type',
    },
    {
        question: 'Which of the following is a TypeScript type assertion?',
        choices: ['variable as type', 'type of variable', '<type> variable', 'Both A and C'],
        correctAnswer: 'Both A and C',
    },
];
const quiz = async () => {
    let score = 0;
    const incorrectAnswers = [];
    for (const question of questions) {
        const { answer } = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: question.question,
                choices: question.choices,
            },
        ]);
        if (answer === question.correctAnswer) {
            console.log(chalk.green('Correct!'));
            score++;
        }
        else {
            console.log(chalk.red('Wrong!'));
            incorrectAnswers.push({
                question: question.question,
                correctAnswer: question.correctAnswer,
                userAnswer: answer,
            });
        }
    }
    console.log(chalk.blue(`\nYou scored ${score} out of ${questions.length}\n`));
    if (incorrectAnswers.length > 0) {
        console.log(chalk.yellow('Review of incorrect answers:\n'));
        incorrectAnswers.forEach((item, index) => {
            console.log(`${index + 1}. ${item.question}`);
            console.log(`   Your answer: ${chalk.red(item.userAnswer)}`);
            console.log(`   Correct answer: ${chalk.green(item.correctAnswer)}\n`);
        });
    }
};
quiz();
