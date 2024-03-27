#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 75584;


    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your pin",
            type: "number",
        }
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!");

        let operationAnswer = await inquirer.prompt([
            {
                name: "operation",
                message: "Please choose one of the options.",
                type: "list",
                choices: ["Cash Withdrawals", "FastCash", "Transfer of funds", "Balance Inquiry"]
            }
        ]);

        if (operationAnswer.operation === "Cash Withdrawals") {
            let amountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the withdrawal amount",
                    type: "number"
                }
            ]);
            if (amountAnswer.amount > myBalance) {
                console.log("Insufficient balance.");
            } else {
                myBalance -= amountAnswer.amount;
                console.log("Your remaining balance is:" + myBalance);
            }
        } else if (operationAnswer.operation === "FastCash") {
            let fastcashOptions = [5000, 10000, 20000, 30000, 50000];
            let fastcashAnswer = await inquirer.prompt([
                {
                    name: "option",
                    message: "Select FastCash amount",
                    type: "list",
                    choices: fastcashOptions.map(amount => `${amount}`)
                }
            ]);
            if (fastcashAnswer.option <= myBalance) {
                myBalance -= fastcashAnswer.option;
                console.log("FastCash transaction successful. Your remaining balance is:" + myBalance);
            } else {
                console.log("Insufficient balance for FastCash transaction.");
            }
        } else if (operationAnswer.operation === "Transfer of funds") {
            console.log("Transfer of funds functionality coming soon...");
        } else if (operationAnswer.operation === "Balance Inquiry") {
            console.log("Your current balance is:" + myBalance);
        }
    } else {
        console.log("Incorrect pin number");
    }

