#! /usr/bin/env node
import inquirer from "inquirer";
//variables
let myBalance = 10000;
//pin and object
let myPin = 4500;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }]);
//choices and condition
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select option ",
            type: "list",
            choices: ["withdraw", "check balance", "Fast cash"]
        }]);
    console.log(operationAns);
    //condition for withdrawl
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }]);
        if (amountAns.amount > myBalance) {
            console.log(`Insufficient balance. Your current balance is ${myBalance}`);
        }
        else if (myBalance -= amountAns.amount) {
            console.log("Your remaining balance is: " + myBalance);
        }
    }
    //check balance
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
    // fast cash 
    else if (operationAns.operation === "Fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCashAmount",
                message: "Select fast cash amount",
                type: "list",
                choices: [1000, 5000, 10000, 15000]
            }
        ]);
        if (fastCashAns.fastCashAmount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= fastCashAns.fastCashAmount;
            console.log("Fast cash withdrawal successful. Your remaining balance is: " + myBalance);
        }
    }
    // if pin is incorrect
}
else {
    console.log("Incorrect pin number.");
}
