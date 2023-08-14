const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");


const questions = [
    {
        type: "input",
        name: "Text",
        message: "Enter up to 3 Letters:",
    },
    {
        type: "input",
        name: "Text-Color",
        message: "Enter a color for your text:",
    },
    {
        type: "list",
        name: "Shape",
        message: "Choose Shape Style:",
        choices: ["Triangle", "Square", "Circle"],
    },
    {
        type: "input",
        name: "Shape-Color",
        message: "Enter a color for your shape:",
    },
];
