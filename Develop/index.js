// TODO: Include packages needed for this application

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{type: "input", 
                    name:"Title", 
                    message:"Please enter a title: "},
                {
                    type: "input", 
                    name:"Description", 
                    message:"Please enter a description: "
                },
                {
                    type: "input", 
                    name:"install", 
                    message:"Please enter installation instructions: "
                }, 
                {
                    type: "input", 
                    name:"usage", 
                    message:"Please enter usage information: "
                },
                {
                    type: "input", 
                    name:"test", 
                    message:"Please enter test instructions: "
                }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)

    .then(answers => {


    })
    .catch(error => {

    });

}

// Function call to initialize app
init();
