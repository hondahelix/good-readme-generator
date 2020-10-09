const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
let generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);
//console.log(generateMarkdown());

const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your projects title?",
        name: "title"
    }


];

async function promptUser(){
    try{
        const response = await inquirer.prompt(questions);
        const filledFile = generateMarkdown(response);
        console.log(filledFile);
    }
    catch (err){
        console.log(err);
    }
}
//const filledFile = generateMarkdown(response)
function writeToFile(fileName, data) {
}
promptUser();
// function init() {

// }

// init();
