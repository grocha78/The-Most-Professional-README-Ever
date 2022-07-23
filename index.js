// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        //validate property to check that the user enters something, request to enter if not.
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue!');
                return false;
            }
        }
    },
      {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project: (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a brief description to continue!');
                return false;
            }
        }
    },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide install dependencies for your application for the Installation section? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide install dependencies to continue!');
                return false;
            }
        }
    },
      {
        type: 'input',
        name: 'usage',
        message: 'How do we use your application? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide usage information to continue!');
                return false;
            }
        }
    },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests written for your application and how to run them. (Required)',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please provide tests written information to continue!');
                return false;
            }
        }
    },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. (Required)',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('Please provide collaborator information to continue!');
                return false;
            }
        }
    },
      {
        //List of type of licenses to use, defaults to MIT
        type: 'list',
        message: 'Choose a license for your project and press ENTER/RETURN',
        choices: ['AFL 3.0', 'GPL', 'MIT', 'MPL-2.0'],
        name: 'license'
        // default: 'MIT',
    },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide GitHub username to continue!');
                return false;
            }
        }
    },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email address to continue!');
                return false;
            }
        }
    },
];

const promptUser = () => {
    return inquirer.prompt(questions)
};

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Your README file has been created!")
        }
    })
}

// Function to initialize app
function init() {
    promptUser()
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    }) 
};

// Function call to initialize app
init();
