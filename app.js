#! /usr/bin/env node
//SHABANG;
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter your first number?",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Your Second number?",
    },
    {
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
            "Power",
        ],
        type: "list",
        message: "Please! Select operator to perform action",
        name: "operators",
    },
]);
if (answer.operators === "Addition") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operators === "Division") {
    console.log(answer.num1 / answer.num2);
}
else if (answer.operators === "Modulus") {
    console.log(answer.num1 % answer.num2);
}
else if (answer.operators === "Power") {
    console.log(answer.num1 ** answer.num2);
}
else {
    console.log("Enter Numbers");
}
;
