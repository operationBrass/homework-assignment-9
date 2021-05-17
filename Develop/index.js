// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

//update these values if you have repeat information. Sets the default values for faster READMEs!

const username = "operationBrass";
const email = "mr.brn.lewis@outlook.com";
const contribute = "This is currently my own work. Please feel free to submit your contributions on GITHUB with credits given";
const filePath = "../"; //README file path
const screenshot = "./Develop/images/finalScreen.PNG";
const testing = "Future testing planned using Jest testing framework";
const license = "MIT";

// TODO: Create an array of questions for user input
const questions = [{
    
                    type: "input", 
                    name:"username", 
                    message:"Github username:",
                    default: username 
                },
                {
                    type: "input", 
                    name:"email", 
                    message:"Email Address:",
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
                    message:"Screenshot path (relative): ",
                    default:screenshot
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
                    message:"Please enter test instructions: ",
                    default:testing
                },
                {
                    type: "input", 
                    name:"contributors", 
                    message:"How to contribute?",
                    default: contribute
                },
                {
                    type: "list", 
                    name:"license", 
                    message:"Please select license type:",
                    choices: ["MIT","Apache 2.0 License","Creative Commons license family","IBM Public License Version 1.0","GNU General Public License family","Do What The F*ck You Want To Public License"],
                    default: license
                }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(filePath + fileName,data,(error) =>{
    if (error)
    {
        console.log("Error writing file: ", error);
    }
    else
    {
        console.log(fileName," created successfully")
    }
});

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((answers) => {
       const data = generateMarkdown(answers);
       writeToFile("README.MD",data);
    })
    .catch((error) => {
        console.log("error: " + error);
    });

}

// Function call to initialize app
init();
