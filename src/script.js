const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./questions/questionsMap.js')
const FileInstance = require('./DTO/fileInstance.js')

inquirer.prompt(questions).then(answers => {
    let componentChoice = answers['componentType']
    let path = answers['fileDestination']

    switch (componentChoice) {
        case 'Functional':
            fs.copyFile('src/templates/functionalReactComponent.js', path, (err) => {
                if (err) { console.log(err) }
                console.log('functional component created')
                const instance = new FileInstance('file1')
                console.log(instance)
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


