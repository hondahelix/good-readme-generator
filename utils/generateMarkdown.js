function generateMarkdown(userResponse,userGitHubInfo) {
     var readMeOutline = `
   # ${userResponse.title}

   ## Description 

   ${userResponse.description}

   ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [Credits](#credits)
   * [License](#license)
   
   ## Installation

   ${userResponse.installation}

   ## Usage 

   ${userResponse.usage}

   ## Credits

   ${userResponse.credits}

   ## License

   ${userResponse.license}

   ## Badges

   ![badmath](https://img.shields.io/github/issues/${userResponse.gitHubUsername}/${userResponse.title})
   ![badmath](https://img.shields.io/github/forks/${userResponse.gitHubUsername}/${userResponse.title})
   ![badmath](https://img.shields.io/github/stars/${userResponse.gitHubUsername}/${userResponse.title})
   ![badmath](https://img.shields.io/github/license/${userResponse.gitHubUsername}/${userResponse.title})

   ## Contributing

   ${userResponse.contributing}

   ## Tests

   ${userResponse.tests}

   ## Questions

   ${userResponse.questions}

   ${userGitHubInfo.data.email}
   
   ![userAvatar](${userGitHubInfo.data.avatar_url})

   `;

   return readMeOutline;
}

module.exports = generateMarkdown;
