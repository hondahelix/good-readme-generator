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
const questions = ["What is your Github username?","What is your projects title?","What is the description of this project?",
                    "How would someone install this project?", "What is the usage of this project?", "Any credits?","What license does this project have?",
                    "Is there any contrubuters to this project?","Did you write tests for your aplication?","Where should someone go if they have questions about this project?"
                  ];
const input = ["gitHubUsername", "title","description", "installation", "usage", "credits", "license", "contributing","tests" ,"questions"]
const prompt = [];
for(i=0; i<questions.length; i++){
    prompt.push(new Questions(questions[i],input[i]));
}
//console.log(prompt);

async function promptUser(){
    try{
        const response = await inquirer.prompt(prompt);
        console.log(response);
        const filledFile = await generateMarkdown(response);
        console.log(filledFile);
        writeToFile("test.md",filledFile);
    }
    catch (err){
        console.log(err);
    }
}

function writeToFile(fileName, data) {
    writeFileAsync(fileName,data);
}

promptUser();
// function init() {

// }

// init();
