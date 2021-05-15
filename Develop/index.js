// TODO: Include packages needed for this application

const inquirer = require('inquirer');

console.log("Welcome to the pro read-me generator! Lets Begin...");

// TODO: Create an array of questions for user input
const questions = [{
    
                    type: "input", 
                    name:"username", 
                    message:"What is your Github username?"},
                {
                    type: "input", 
                    name:"username", 
                    message:"Email Address?"
                },                   
                {
                    type: "input", 
                    name:"title", 
                    message:"Application Title: "
                },
                {
                    type: "input", 
                    name:"Description", 
                    message:"Description: "
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
                },
                {
                    type: "input", 
                    name:"questions", 
                    message:"Please enter test instructions: "
                },
                {
                    type: "list", 
                    name:"license", 
                    message:"Please select license type:",
                    choices: ["MIT","Academic Free License v3.0","Creative Commons license family","Microsoft Public License","GNU General Public License family","Do What The F*ck You Want To Public License"]
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
