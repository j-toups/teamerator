const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require('node:events');

const getManager = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: "Please enter your name."
        },
        {
            type:'input',
            name:'id',
            message: "Please enter your Employee ID Number."
        },
        {
            type:'input',
            name:'email',
            message: "Please enter your email address."
        },
        {
            type:'input',
            name:'offNum',
            message: "Please enter your Office Number"
        },
    ])
    then((response) => {
        team.push(new getManager(response.name, response.id, response.email, response.offNum))
        addMember()
    })
};

addMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'newMember',
            choices: ['Engineer', 'Intern', 'My team is complete.']
        }
    ]) .then ((response) => {
        if (response.newMember === 'Engineer') {
            getEngineer()
        } else if (response.newMember === 'Intern'){
            getIntern()
        } else {
            createTeam ()
        }
    })
}


