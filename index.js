// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
       

        type: "input",
        message: "What is your github username?",
        name: "username",
    },  {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description",
    }, {
        type: "input",
        message: "Provide a table of contents. (press enter)",
        name: "table of contents",
    }, {
        type: "input",
        message: "What do you need for installation?",
        name: "installation",
    },
        {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    },
    {
        type: "list",
        message: "Choose a license for your project.",
        choices: ["GNU AGPLv3", "GNU GPLv3', 'GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"],
        name: "license"
    },
        {
        type: "input",
        message: "Who contributed?",
        name: "contributers",
    },
        {
        type: "input",
        message: "Do you have any questions?",
        name: "questions",
    },
]   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Your ReadMe is ready!")
        }
    })

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("ReadMe.md", generateMarkdown(data))
            console.log(data)
        })
}

// Function call to initialize app
init();
