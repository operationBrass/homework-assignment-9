// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

//update these values for quicker readme-files!
const username = "operationBrass";
const email = "mr.brn.lewis@gmail.com";


// TODO: Create an array of questions for user input
const questions = [{
    
                    type: "input", 
                    name:"username", 
                    message:"What is your Github username?",
                    default: username
                {
                    type: "input", 
                    name:"email", 
                    message:"Email Address?",
                    default: email,
                    
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
                    name:"screenshot", 
                    message:"Screenshot path (relative): "
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
                    message:"How to contribute?",
                    default: "Please feel free to clone the repo and share your ideas with the Github community!"
                },
                {
                    type: "list", 
                    name:"license", 
                    message:"Please select license type:",
                    choices: ["MIT","Apache 2.0 License","Creative Commons license family","IBM Public License Version 1.0","GNU General Public License family","Do What The F*ck You Want To Public License"],
                    default: "MIT"
                }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile("./" + fileName,data,(error) =>{
    if (error)
    {
        console.log("Error writing file: ", error);
    }
});

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((answers) => {
       const data = generateMarkdown(answers);
       writeToFile("readme.md",data);
    })
    .catch((error) => {
        console.log("error: " + error);
    });

}

// Function call to initialize app
init();
