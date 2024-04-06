#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1, // Base Currency
    PKR: 277.54,
    KWD: 0.31,
    BHD: 0.38,
    OMR: 0.38,
    JOD: 0.70,
    KYD: 0.82,
    INR: 83.30,   
    GBP: 0.89,
    BSD: 1.00,
    EUR: 0.88,
    CAD: 1.36,
    SGD: 1.35,
    AUD: 1.52,
    NZD: 1.66,
}

let userAnswer = await inquirer.prompt (
    [
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: [
                "USD", "PKR", "KWD", 
                "BHD", "OMR", "JOD", 
                "KYD", "INR", "GBP", 
                "BSD", "EUR", "CAD",
                "SGD", "AUD", "NZD"
            ]
        },
        {
            name: "to",
            message: "Enter to Currency",
            type: "list",
            choices: [
                "USD", "PKR", "KWD", 
                "BHD", "OMR", "JOD", 
                "KYD", "INR", "GBP", 
                "BSD", "EUR", "CAD",
                "SGD", "AUD", "NZD"
            ]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
    ]
)

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);