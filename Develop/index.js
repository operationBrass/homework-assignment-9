// TODO: Include packages needed for this application


const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

console.log();

// TODO: Create an array of questions for user input
const questions = [{
    
                    type: "input", 
                    name:"username", 
                    message:"What is your Github username?"},
                {
                    type: "input", 
                    name:"email", 
                    message:"Email Address?"
                },                   
                {
                    type: "input", 
                    name:"title", 
                    message:"Application Title: "
                },
                {
                    type: "input", 
                    name:"intro", 
                    message:"Short introduction (2-3 sentences): "
                }, 
                {
                    type: "input", 
                    name:"tech", 
                    message:"Technolgies invovled: "
                }, 
                {
                    type: "input", 
                    name:"install", 
                    message:"Installation requirements: "
                }, 
                {
                    type: "input", 
                    name:"usage", 
                    message:"Examples of use: "
                },
                {
                    type: "input", 
                    name:"test", 
                    message:"Please enter test instructions: "
                },
                {
                    type: "input", 
                    name:"contributors", 
                    message:"Any other contributors?"
                },
                {
                    type: "list", 
                    name:"license", 
                    message:"Please select license type:",
                    choices: ["MIT","Apache 2.0 License","Creative Commons license family","IBM Public License Version 1.0","GNU General Public License family","Do What The F*ck You Want To Public License"]
                }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {





}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((answers) => {
       console.log(generateMarkdown(answers));
    })
    .catch((error) => {
        console.log("error: " + error);
    });

}

// Function call to initialize app
init();
