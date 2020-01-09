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
    // console.log(`Good Choice: ${choiceA}`)
    componentChoice = choiceA

    switch (componentChoice) {
        case 'Functional':
            console.log('functional choice is cool')
            fs.copyFile('src/templates/functionalReactComponent.js', 'src/myFunctionalComponent.js', (err) => {
                if (err) { console.log(err) }
                console.log('functional component created')
            })
            return 'functional'
        case 'Class/Stateful':
            console.log('class/stateful choice is cool')
            fs.copyFile('src/templates/classReactComponent.js', 'src/myClassComponent.js', (err) => {
                if (err) { console.log(err) }
                console.log('class/stateful component created')
            })
            return 'class/stateful'
        default: 
            return 'Choice invalid'
    }
})


