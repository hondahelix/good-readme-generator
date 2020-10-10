//requred 
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
let generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);
//questions construct
function Questions(userPrompt,userInput){
    this.type = "input",
    this.message = userPrompt,
    this.name = userInput;
}
const questions = ["What is your Github username?","What is your projects title?","What is the description of this project?",
                    "How would someone install this project?", "What is the usage of this project?", "Any credits?","What license does this project have?",
                    "Is there any contrubuters to this project?","Did you write tests for your aplication?","Where should someone go if they have questions about this project?",
                    "What do you want to name this readme file?"
                  ];
const input = ["gitHubUsername", "title","description", "installation", "usage", "credits", "license", "contributing","tests" ,"questions","readmeFileName"]
const prompt = [];
//makes and puts question objects into a array
for(i=0; i<questions.length; i++){
    prompt.push(new Questions(questions[i],input[i]));
}
//prompts user and also gets github info provided that they type in a valid github username
async function promptUser(){
    try{
        const response = await inquirer.prompt(prompt);
        const userGithubInfo = await axios.get(`https://api.github.com/users/${response.gitHubUsername}`);
        const filledFile = generateMarkdown(response,userGithubInfo);
        writeToFile(`${response.readmeFileName}.md`,filledFile);
    }
    catch (err){
        console.log(err);
    }
}
//writes files 
function writeToFile(fileName, data) {
    writeFileAsync(fileName,data);
}
//runs it!
promptUser();