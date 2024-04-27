#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("******* Welcome to EasyPaisa App *******");
let myBalance = 500000;
const myPin = 75580;
const transactionHistory = [];
async function withdraw() {
    try {
        let amount = await inquirer.prompt({
            name: "withdrawAmount",
            type: "number",
            message: "Enter the amount to withdraw:"
        });
        if (amount.withdrawAmount <= myBalance) {
            myBalance -= amount.withdrawAmount;
            console.log(chalk.green(`Withdrawn ${amount.withdrawAmount}. Your current balance is ${myBalance}`));
            transactionHistory.push(`Withdrawn: ${amount.withdrawAmount}`);
        }
        else {
            console.log(chalk.red("Insufficient funds!"));
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
async function checkBalance() {
    console.log(`Your current balance is ${myBalance}`);
}
async function showTransactionHistory() {
    console.log("Transaction History:");
    if (transactionHistory.length === 0) {
        console.log("No transactions yet.");
    }
    else {
        transactionHistory.forEach(transaction => console.log(transaction));
    }
}
async function bankTransfer() {
    try {
        let bankTransfer = await inquirer.prompt([
            {
                name: "bankName",
                type: "list",
                message: "SELECT A BANK TO TRANSFER MONEY",
                choices: ["Islamic Bank", "Faisal Bank", "HBL Bank", "UBL Bank", "Alaied Bank"]
            },
            {
                name: "accountNumber",
                type: "number",
                message: "ENTER THE ACCOUNT NUMBER"
            },
            {
                name: "amount",
                type: "number",
                message: "ENTER THE AMOUNT TO TRANSFER"
            }
        ]);
        if (bankTransfer.amount <= myBalance) {
            myBalance -= bankTransfer.amount;
            console.log(chalk.green(`Transferred ${bankTransfer.amount} to ${bankTransfer.bankName}. Your current balance is ${myBalance}`));
            transactionHistory.push(`Transferred ${bankTransfer.amount} to ${bankTransfer.bankName}`);
        }
        else {
            console.log(chalk.red("Insufficient funds!"));
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
async function deposit() {
    try {
        let depositAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "ENTER YOUR AMOUNT TO DEPOSIT"
        });
        myBalance += depositAmount.amount;
        console.log(chalk.green(`Deposited ${depositAmount.amount}. Your current balance is ${myBalance}`));
        transactionHistory.push(`Deposited: ${depositAmount.amount}`);
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
async function main() {
    try {
        let answer = await inquirer.prompt({
            name: "pinCode",
            type: "number",
            message: "Enter your 5 digit code!"
        });
        if (answer.pinCode === myPin) {
            console.log("Correct pincode!!!");
            let operationAns;
            do {
                operationAns = await inquirer.prompt({
                    name: "operation",
                    type: "list",
                    message: "Select an option",
                    choices: ["Withdraw", "Check Balance", "Transaction History", "Money Transfer", "Deposit", "Exit"]
                });
                switch (operationAns.operation) {
                    case "Withdraw":
                        await withdraw();
                        break;
                    case "Check Balance":
                        await checkBalance();
                        break;
                    case "Transaction History":
                        await showTransactionHistory();
                        break;
                    case "Money Transfer":
                        await bankTransfer();
                        break;
                    case "Deposit":
                        await deposit();
                        break;
                    case "Exit":
                        console.log("Thank you for using JAZZ CASH");
                        break;
                    default:
                        console.log("Invalid option");
                }
            } while (operationAns.operation !== "Exit");
        }
        else {
            console.log("INCORRECT PINCODE!");
        }
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
main();
