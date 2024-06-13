#! /usr/bin/env node


import inquirer from 'inquirer';
import chalk from 'chalk';

// Function to calculate the time difference
function calculateTimeDifference(endDate: Date): number {
  const now = new Date().getTime();
  const end = new Date(endDate).getTime();
  return end - now;
}

// Function to format time as hh:mm:ss
function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to prompt the user for the countdown date
async function getCountdownDate(): Promise<Date> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'date',
      message: 'Enter the countdown end date (YYYY-MM-DD HH:MM:SS):',
      validate: (input: string) => {
        const isValid = !isNaN(Date.parse(input));
        return isValid || 'Please enter a valid date and time.';
      }
    }
  ]);
  return new Date(answers.date);
}

// Main function to run the countdown timer
async function runCountdown() {
  const endDate = await getCountdownDate();
  console.log(chalk.blue(`Countdown to ${endDate.toString()}`));

  const interval = setInterval(() => {
    const timeDifference = calculateTimeDifference(endDate);

    if (timeDifference <= 0) {
      clearInterval(interval);
      console.log(chalk.green('Countdown finished!'));
    } else {
      console.log(chalk.yellow(formatTime(timeDifference)));
    }
  }, 1000);
}

runCountdown().catch(error => console.error(chalk.red(error)));
