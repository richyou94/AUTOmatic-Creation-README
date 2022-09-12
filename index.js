// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 

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
        name: 'projectDescr',
        message: 'Please describe the project in 2-3 sentences or more.'
    },
    {
        type: 'checkbox',
        name: 'technologyUsed',
        message: 'What technology did you used for this project?',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'JQuery', 'Bootstraps', 'Express js', 'Node JS', 'Python', 'Java', 'C', 'C++', 'Golang', 'C#', 'PHP', 'Swift', 'Ruby on Rails', 'Django', 'Angular JS', 'ASP.NET', 'METEOR', 'Laravel', 'Spring', 'PLAY', 'CodeIgniter', 'React' ]
    },
    {
        type: 'input',
        name: 'motivationOfApp',
        message: 'What is the motivation of creating this project? Please describe in 2-3 sentences or more.'
    },
    {
        type: 'input',
        name: 'projectStandsOut',
        message: 'What makes your project stand out?'
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
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    console.log(data)
const filename = `README.md`
const readMeTemplate = 
    `# ${data.projectName}\n ## Project Description\n### ${data.projectDescr}\n ## Main Contributor: ${data.name}\n`

    fs.writeFile(filename, `${readMeTemplate}`, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
};

// This is extra function of append to add iterate function of listing the technology list. 
function appendTechSection() {
    fs.appendFile(`README.md`, `## Technology USED`, (err) =>
    err ? console.error(err) : console.log('Sucessfully commitited the technology section'))
}
function appendTech(data) {
    var techList = data.technologyUsed;
    techList = techList.sort();
    for (var i = 0; i < techList.length; i++) {
        fs.appendFile('README.md', `- ${techList[i]}\n `, (err) =>
        err ? console.error(err) : console.log(`Successfully appended!`)
        )
    }
}

function appendMotivation(data) {
    if(data.motivationOfApp === "") {
        console.log("there is no input in motivation of this project")
    } else {
    fs.appendFile(`README.md`, `## Motivation\n - ${data.motivationOfApp}\n`, (err) =>
    err ? console.error(err) : console.log(`Sucessfully commited motivation input`));
    }};

function appendProjectStands(data) {
    if(data.projectStandsOut === "") {
        console.log("there is no input in project stands out description of this project")
    } else {
    fs.appendFile(`README.md`, `## Project Stands OUT\n - ${data.projectStandsOut}\n`, (err) =>
    err ? console.error(err) : console.log(`Sucessfully commited project stands out points`));
    }};

function appendContactMe(data) {
    if(data.contactNumber === "" && data.gitHubUserName === "" && data.userEmail === "") {
        console.log("there is no input in any of contact me section of this project")
    } else {
    fs.appendFile(`README.md`, `## Contact Me\n`, (err) =>
    err ? console.error(err) : console.log(`Sucessfully commited contact me section`));
    }};
function appendContactNumber(data) {
    if (data.contactNumber === "") {
        console.log('there is no input in contact number.')
    } else {
        fs.appendFile(`README.md`, `- ${data.contactNumber}\n`, (err) =>
        err ? console.error(err) : console.log(`Successfully committed contact number.`))
    }
}

function appendGitHub(data) {
    if (data.gitHubUserName === "") {
        console.log('there is no input in github username');
    } else {
        fs.appendFile(`README.md`, `- ${data.gitHubUserName}\n`, (err) =>
        err ? console.error(err) : console.log(`Successfully committed github username.`))
    }
}
function appendEmail(data) {
    if (data.userEmail === "") {
        console.log('there is no input in email');
    } else {
        fs.appendFile(`README.md`, `- ${data.userEmail}\n`, (err) =>
        err ? console.error(err) : console.log(`Successfully committed email.`))
    }
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(data);
            setTimeout(function() {appendTech(data)}, 2000);
            setTimeout(function() {appendTechSection()}, 1000);
            setTimeout(function() {appendMotivation(data)}, 3000);
            setTimeout(function() {appendProjectStands(data)}, 4000);
            setTimeout(function() {appendContactMe(data)}, 5000);
            setTimeout(function() {appendContactNumber(data)}, 6000);
            setTimeout(function() {appendGitHub(data)}, 7000);
            setTimeout(function() {appendEmail(data)}, 8000);
        });
}

// Function call to initialize app
init();
