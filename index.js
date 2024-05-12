import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 4500;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your number",
        type: "number"
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select option ",
            type: "list",
            choices: ["withdraw", "check balance", "Fast cash"]
        }]);
    console.log(operationAns);
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
}
else {
    console.log("Incorrect pin number.");
}
