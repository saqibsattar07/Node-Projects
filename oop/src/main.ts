import inquirer from 'inquirer';
import chalk from 'chalk';
import { Student } from './Student.js';
import { Teacher } from './Teacher.js';

async function main() {
    const { role } = await inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Who are you?',
            choices: ['Student', 'Teacher'],
        },
    ]);

    if (role === 'Student') {
        const { name, age, studentId } = await inquirer.prompt([
            { type: 'input', name: 'name', message: 'Enter your name:' },
            { type: 'number', name: 'age', message: 'Enter your age:' },
            { type: 'input', name: 'studentId', message: 'Enter your student ID:' },
        ]);

        const student = new Student(name, age, studentId);
        console.log(chalk.green(student.getDetails()));

    } else if (role === 'Teacher') {
        const { name, age, subject } = await inquirer.prompt([
            { type: 'input', name: 'name', message: 'Enter your name:' },
            { type: 'number', name: 'age', message: 'Enter your age:' },
            { type: 'input', name: 'subject', message: 'Enter your subject:' },
        ]);

        const teacher = new Teacher(name, age, subject);
        console.log(chalk.blue(teacher.getDetails()));
    }
}

main();
