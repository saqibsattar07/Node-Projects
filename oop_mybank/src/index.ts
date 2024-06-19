#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { BankAccount } from './account.js';

const accounts: BankAccount[] = [];

async function main() {
  console.log(chalk.green('Welcome to MyBank Console App!'));

  while (true) {
    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Choose an action:',
      choices: ['Create Account', 'Deposit', 'Withdraw', 'Check Balance', 'Exit']
    });

    switch (action) {
      case 'Create Account':
        await createAccount();
        break;
      case 'Deposit':
        await deposit();
        break;
      case 'Withdraw':
        await withdraw();
        break;
      case 'Check Balance':
        await checkBalance();
        break;
      case 'Exit':
        console.log(chalk.blue('Thank you for using MyBank!'));
        return;
    }
  }
}

async function createAccount() {
  const { accountNumber, initialBalance } = await inquirer.prompt([
    { type: 'number', name: 'accountNumber', message: 'Enter account number:' },
    { type: 'number', name: 'initialBalance', message: 'Enter initial balance:', default: 0 }
  ]);

  const account = new BankAccount(accountNumber, initialBalance);
  accounts.push(account);
  console.log(chalk.green('Account created successfully.'));
}

async function deposit() {
  const { accountNumber, amount } = await inquirer.prompt([
    { type: 'number', name: 'accountNumber', message: 'Enter account number:' },
    { type: 'number', name: 'amount', message: 'Enter deposit amount:' }
  ]);

  const account = accounts.find(acc => acc.getAccountNumber() === accountNumber);
  if (account) {
    account.deposit(amount);
  } else {
    console.log(chalk.red('Account not found.'));
  }
}

async function withdraw() {
  const { accountNumber, amount } = await inquirer.prompt([
    { type: 'number', name: 'accountNumber', message: 'Enter account number:' },
    { type: 'number', name: 'amount', message: 'Enter withdrawal amount:' }
  ]);

  const account = accounts.find(acc => acc.getAccountNumber() === accountNumber);
  if (account) {
    account.withdraw(amount);
  } else {
    console.log(chalk.red('Account not found.'));
  }
}

async function checkBalance() {
  const { accountNumber } = await inquirer.prompt([
    { type: 'number', name: 'accountNumber', message: 'Enter account number:' }
  ]);

  const account = accounts.find(acc => acc.getAccountNumber() === accountNumber);
  if (account) {
    console.log(`Balance: $${account.getBalance()}`);
  } else {
    console.log(chalk.red('Account not found.'));
  }
}

main();
