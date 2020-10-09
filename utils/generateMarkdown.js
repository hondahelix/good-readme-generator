function generateMarkdown(data) {
     var readMeOutline = `
   # ${data.title}

   ## Description 

   ${data.description}

   ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [Credits](#credits)
   * [License](#license)
   
   ## Installation

   ${data.installation}

   ## Usage 

   ${data.usage}

   ## Credits

   ${data.credits}

   ## License

   ${data.license}

   ## Badges

   ![badmath](https://img.shields.io/github/issues/${data.gitHubUsername}/${data.title})
   ![badmath](https://img.shields.io/github/forks/${data.gitHubUsername}/${data.title})
   ![badmath](https://img.shields.io/github/stars/${data.gitHubUsername}/${data.title})
   ![badmath](https://img.shields.io/github/license/${data.gitHubUsername}/${data.title})

   ## Contributing

   ${data.contributing}

   ## Tests

   ${data.tests}

   ## Questions

   ${data.questions}

   `;

   return readMeOutline;
}

module.exports = generateMarkdown;
