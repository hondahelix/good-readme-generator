const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
let generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);
//console.log(generateMarkdown());

function Questions(userPrompt,userInput){
    this.type = "input",
    this.message = userPrompt,
    this.name = userInput;
}
const questions = ["What is your Github username?","What is your projects title?","What is the description of this project?"];
const input = ["gitHubUsername", "title","description"]
const prompt = [];
for(i=0; i<questions.length; i++){
    prompt.push(new Questions(questions[i],input[i]));
}
//console.log(prompt);

async function promptUser(){
    try{
        const response = await inquirer.prompt(prompt);
        console.log(response);
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
