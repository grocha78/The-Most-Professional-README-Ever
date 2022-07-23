// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license.name === 'MIT') {
        license.link = 'https://opensource.org/licenses/MIT';
        license.badge = `![License](https://img.shields.io/badge/license-MIT-green.svg)`;
    }else if (license.name === 'AFL 3.0') {
        license.link = 'https://opensource.org/licenses/AFL-3.0';
        license.badge = `![License](https://img.shields.io/badge/license-AFL%203.0-orange.svg)`;
    }else if (license.name === 'GPL') {
        license.link = 'https://opensource.org/licenses/GPL-3.0';
        license.badge = `![License](https://img.shields.io/badge/license-GPL-blue.svg)`;
    }else if (license.name === 'MPL-2.0') {
        license.link = 'https://opensource.org/licenses/MPL-2.0';
        license.badge = `![License](https://img.shields.io/badge/license-MPL%202.0%20-red.svg)`;
    };
}

// Function to generate markdown for README
function generateMarkdown(data) {
    let license = {
        name: `${data.license}`,
        badge: '',
        link: '',
    };
    renderLicenseBadge(license)
    console.log(license)


  return `# ${data.title}
https://github.com/${data.github}/${data.title}
## Description 
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
## Installation
The following dependencies must be installed to run the application:
${data.installation}
## Usage
In order to use this application: ${data.usage}
## Tests
${data.tests}
## Credits
${data.credits}
## License
${license.badge}
This project is licensed under the ${data.license} license. Please click here for more info: ${license.link}
# Contact
If you have any questions about the repository or about this application please send an email to: ${data.email}
- Github: ${data.github}
`;
};

module.exports = generateMarkdown;
