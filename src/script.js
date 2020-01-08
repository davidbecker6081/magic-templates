const fs = require('fs')
const inquirer = require('inquirer')
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// const name = readline.question('Whats your name? ', (name) => {
//     console.log(`Hi ${name}`)
//     readline.close()
// })
let componentChoice = null;
const questions = [{
    type: 'list',
    name: 'componentType',
    choices: ['Functional', 'Class/Stateful'],
    message: 'Which type of component would you like to create?'
}]

inquirer.prompt(questions).then(answers => {
    let choiceA = answers['componentType']
    console.log(`Good Choice: ${choiceA}`)
    componentChoice = choiceA
})


