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

const questions = [{
    type: 'list',
    name: 'componentType',
    choices: ['Functional', 'Class/Stateful'],
    message: 'Which type of component would you like to create?'
}, {
    type: 'input',
    name: 'fileDestination',
    message: 'Where would you like the component created? Please provide relative path (include filename): '
}]

inquirer.prompt(questions).then(answers => {
    let componentChoice = answers['componentType']
    let path = answers['fileDestination']

    switch (componentChoice) {
        case 'Functional':
            fs.copyFile('src/templates/functionalReactComponent.js', path, (err) => {
                if (err) { console.log(err) }
                console.log('functional component created')
            })
            return 'functional'
        case 'Class/Stateful':
            fs.copyFile('src/templates/classReactComponent.js', path, (err) => {
                if (err) { console.log(err) }
                console.log('class/stateful component created')
            })
            return 'class/stateful'
        default: 
            return 'Choice invalid'
    }
})


