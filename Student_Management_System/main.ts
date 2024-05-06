#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

class Student {
  name: string;
  studentID: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.name = name;
    this.studentID = this.generateStudentID();
    this.courses = [];
    this.balance = 0;
  }

  generateStudentID(): string {
    let id = '';
    const characters = '0123456789';
    for (let i = 0; i < 5; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  }

  enroll(course: string): void {
    this.courses.push(course);
    console.log(chalk.green(`Enrolled in ${course}`));
  }

  viewBalance(): void {
    console.log(chalk.yellow(`Balance: $${this.balance}`));
  }

  payTuition(amount: number): void {
    this.balance -= amount;
    console.log(chalk.green(`Paid $${amount} towards tuition`));
    this.viewBalance();
  }

  showStatus(): void {
    console.log(chalk.green.bold('Student Status:'));
    console.log(chalk.blue(`Name: ${this.name}`));
    console.log(chalk.blue(`Student ID: ${this.studentID}`));
    console.log(chalk.blue('Courses Enrolled:'));
    this.courses.forEach(course => {
      console.log(chalk.blue(`- ${course}`));
    });
    this.viewBalance();
  }
}

async function addStudent(): Promise<void> {
  console.log(chalk.yellow.bold('Add a new student:'));

  const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Enter student name:'
  });

  const student = new Student(name);

  while (true) {
    const { choice } = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: 'Choose an operation:',
      choices: ['Enroll in a course', 'View balance', 'Pay tuition', 'Show status', 'Add another student', 'Exit']
    });

    switch (choice) {
      case 'Enroll in a course':
        const { course } = await inquirer.prompt({
          type: 'input',
          name: 'course',
          message: 'Enter course name to enroll:'
        });
        student.enroll(course);
        break;
      case 'View balance':
        student.viewBalance();
        break;
      case 'Pay tuition':
        const { amount } = await inquirer.prompt({
          type: 'number',
          name: 'amount',
          message: 'Enter amount to pay:'
        });
        student.payTuition(amount);
        break;
      case 'Show status':
        student.showStatus();
        break;
      case 'Add another student':
        return addStudent();
      case 'Exit':
        console.log(chalk.yellow.bold('Exiting Add Student'));
        return;
    }
  }
}

async function main() {
  console.log(chalk.yellow.bold('Welcome to Student Management System!'));

  while (true) {
    const { choice } = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: 'Choose an operation:',
      choices: ['Add a new student', 'Exit']
    });

    switch (choice) {
      case 'Add a new student':
        await addStudent();
        break;
      case 'Exit':
        console.log(chalk.yellow.bold('Exit'));
        return;
    }
  }
}

main();
