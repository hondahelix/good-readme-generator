function generateMarkdown(data) {
     return `
   # ${data.title}

   ## Description 

   ${data.description}

   ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [Credits](#credits)
   * [License](#license)
   
   ## Installation

   ## Usage 

   ## Credits

   ## License

   ## Badges

   ## Contributing

   ## Tests

   ## Questions

   `;
}

module.exports = generateMarkdown;
