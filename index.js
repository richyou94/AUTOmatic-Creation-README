// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const folderName = `./template`;

// var promptData = [];
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'projectMotiv',
        message: 'What was your motivation?'
    },
    {
        type: 'input',
        name: 'projectWhy',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'projectProblem',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'projectLearn',
        message: 'What did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use. You can later add screenshots to this section'
    },
    {
        type: 'list',
        name: 'creditBoolean',
        message: 'Is there any collaborator for this project?',
        choices: ['Yes', 'No']
    },
    {
        type: 'list',
        name: 'apiBoolean',
        message: 'Is there any API used for this project?',
        choices: ['Yes', 'No']
    },
    {
        type: 'list',
        name: 'testBoolean',
        message: 'Do you want to include test section for this README.md?',
        choices: ['Yes', 'No']
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for this project.',
        choices: ['MIT License: "I want it simple and permissive."', 'GNU GPLv3 License: "I care about sharing improvements."', 'N/A']
    },
    {
        type: 'checkbox',
        name: 'technologyUsed',
        message: 'What technology did you used for this project?',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'JQuery', 'Bootstraps', 'Express js', 'Node JS', 'Python', 'Java', 'C', 'C++', 'Golang', 'C#', 'PHP', 'Swift', 'Ruby on Rails', 'Django', 'Angular JS', 'ASP.NET', 'METEOR', 'Laravel', 'Spring', 'PLAY', 'CodeIgniter', 'React' ]
    },
    {
        type: 'input',
        name: 'contactNumber',
        message: 'What is your contact number?'
    },
    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    console.log(data)
const filename = `./template/README.md`
const readMeTemplate = 
`# ${data.projectName} ${renderLicenseBadge(data)}
## Main Contributor: ${data.name}

## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project-Description
- ${data.projectMotiv}
- ${data.projectWhy}
- ${data.projectProblem}
- ${data.projectLearn}

## Installation
${data.installation}
## Usage
${data.usage}\n
Add your screenshots below to explain the usage of this project.\n`

    fs.writeFile(filename, `${readMeTemplate}`, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
};
function appendCredits(data) {
    if (data.creditBoolean === 'No') {
        console.log("skip the credits section because there is no collaobrator");
    } else {
    const creditItems =
`## Contributing
Enter collaborators in this section with the link to their GitHub profiles\n
- Name, [GitHub](http://github.com)\n`

        fs.appendFile(`./template/README.md`, creditItems, (err) =>
        err ? console.error(err) : console.log('Successfully committed credit sections.'))
    }}

function appendAPI(data) {
    if (data.apiBoolean === 'No') {
        console.log("skip the api section because there is no api used in this project")
    } else {
        const apiItems = 
`## API
List/Enter any API used for this project.\n
- ______ API`
    }
}
    
function renderLicenseBadge(data) {
    var licenseMIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    var licenseGNUGPLv3 = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    if (data.license === 'MIT License: "I want it simple and permissive."') {
        return licenseMIT;
    } else if (data.license === 'GNU GPLv3 License: "I care about sharing improvements."'){
        return licenseGNUGPLv3
    } else if (data.license === "N/A") {
        return ""
    }
}

function renderLicenseLink(data) {
    var licenseLinkMIT = 'https://opensource.org/licenses/MIT';
    var licenseLinkGNU = 'https://www.gnu.org/licenses/gpl-3.0';
    if (data.license === 'MIT License: "I want it simple and permissive."') {
        return licenseLinkMIT;
    } else if (data.license === 'GNU GPLv3 License: "I care about sharing improvements."'){
        return licenseLinkGNU
    } else if (data.license === "N/A") {
        return ""
    }
}
function renderLicenseName(data) {
    var licenseNameMIT = 'The MIT License';
    var licenseNameGNU = 'GNU GPL v3';
    if (data.license === 'MIT License: "I want it simple and permissive."') {
        return licenseNameMIT;
    } else if (data.license === 'GNU GPLv3 License: "I care about sharing improvements."'){
        return licenseNameGNU
    } else if (data.license === "N/A") {
        return ""
    }
}
function appendLicense(data) {
    const licenseItems =
`## License
### [${renderLicenseName(data)}](${renderLicenseLink(data)})\n`
    if (renderLicenseName(data) === "") {
        return;
    } else {
        fs.appendFile(`./template/README.md`, licenseItems, (err) =>
        err ? console.error(err) : console.log('Successfully committed license sections.'))
}}

function appendTest(data) {
    if (data.testBoolean === 'No') {
        console.log("skip the test section because user did not want to include test section");
    } else {
        const testItems = 
`## Test
Go the extra mile and write tests for your application. Then provide examples on how to run them here.`
        fs.appendFile(`./template/README.md`, testItems, (err) =>
        err ? console.error(err) : console.log('Successfully committed test section'))
    }
}


// This is extra function of append to add iterate function of listing the technology list. 
// function appendTechSection() {
//     fs.appendFile(`README.md`, `## Technology USED`, (err) =>
//     err ? console.error(err) : console.log('Sucessfully commitited the technology section'))
// }
// function appendTech(data) {
//     var techList = data.technologyUsed;
//     techList = techList.sort();
//     for (var i = 0; i < techList.length; i++) {
//         fs.appendFile('README.md', `- ${techList[i]}\n `, (err) =>
//         err ? console.error(err) : console.log(`Successfully appended!`)
//         )
//     }
// }

// function appendMotivation(data) {
//     if(data.motivationOfApp === "") {
//         console.log("there is no input in motivation of this project")
//     } else {
//     fs.appendFile(`README.md`, `## Motivation\n - ${data.motivationOfApp}\n`, (err) =>
//     err ? console.error(err) : console.log(`Sucessfully commited motivation input`));
//     }};

// function appendProjectStands(data) {
//     if(data.projectStandsOut === "") {
//         console.log("there is no input in project stands out description of this project")
//     } else {
//     fs.appendFile(`README.md`, `## Project Stands OUT\n - ${data.projectStandsOut}\n`, (err) =>
//     err ? console.error(err) : console.log(`Sucessfully commited project stands out points`));
//     }};

// function appendContactMe(data) {
//     if(data.contactNumber === "" && data.gitHubUserName === "" && data.userEmail === "") {
//         console.log("there is no input in any of contact me section of this project")
//     } else {
//     fs.appendFile(`README.md`, `## Contact Me\n`, (err) =>
//     err ? console.error(err) : console.log(`Sucessfully commited contact me section`));
//     }};
// function appendContactNumber(data) {
//     if (data.contactNumber === "") {
//         console.log('there is no input in contact number.')
//     } else {
//         fs.appendFile(`README.md`, `- ${data.contactNumber}\n`, (err) =>
//         err ? console.error(err) : console.log(`Successfully committed contact number.`))
//     }
// }

// function appendGitHub(data) {
//     if (data.gitHubUserName === "") {
//         console.log('there is no input in github username');
//     } else {
//         fs.appendFile(`README.md`, `- ${data.gitHubUserName}\n`, (err) =>
//         err ? console.error(err) : console.log(`Successfully committed github username.`))
//     }
// }
// function appendEmail(data) {
//     if (data.userEmail === "") {
//         console.log('there is no input in email');
//     } else {
//         fs.appendFile(`README.md`, `- ${data.userEmail}\n`, (err) =>
//         err ? console.error(err) : console.log(`Successfully committed email.`))
//     }
// }


// TODO: Create a function to initialize app
function init() {
    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }
    } catch (err) {
        console.error(err);
    }
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(data);
            setTimeout(function() {appendCredits(data)}, 1000);
            setTimeout(function() {appendAPI(data)}, 1250);
            setTimeout(function() {appendLicense(data)}, 1500);
            setTimeout(function() {appendTest(data)}, 1750);
            // setTimeout(function() {appendTech(data)}, 2000);
            // setTimeout(function() {appendTechSection()}, 1000);
            // setTimeout(function() {appendMotivation(data)}, 3000);
            // setTimeout(function() {appendProjectStands(data)}, 4000);
            // setTimeout(function() {appendContactMe(data)}, 5000);
            // setTimeout(function() {appendContactNumber(data)}, 6000);
            // setTimeout(function() {appendGitHub(data)}, 7000);
            // setTimeout(function() {appendEmail(data)}, 8000);
        });
}

// Function call to initialize app
init();


// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
