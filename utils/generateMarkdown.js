// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}
  https://github.com/${data.username}/${data.title}
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following have to be installed in order to run the program.
  ${data.installation}
  # Usage
  To use this app, ${data.usage}
  # License
  This project is licensed under the ${data.license} license.
  
![Github License](http://img.shields.io/badge/license-${data.license}-blue.svg)

  # Contributing 
  Contributors: ${data.contributers}

  # Questions
  ${data.questions}

  

  

`
}

module.exports = generateMarkdown;

