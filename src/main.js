const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./questions/questionsMap.js')
const FileInstance = require('./DTO/fileInstance.js')
const writeArrayToFile = require('./utils/writeArrayToFile.js')
const classReactComponent = require('./templates/classReactComponentArray.js')
const lifecycleMethodsArray = require('./templates/lifecycleMethods/lifecycleMethods.js')

inquirer.prompt(questions.component).then(answers => {
    let componentChoice = answers['componentType']
    let path = answers['fileDestination']
    
    switch (componentChoice) {
        case 'Functional':

            console.log(methodsToCopy)
            fs.copyFile('src/templates/functionalReactComponent.js', path, (err) => {
                if (err) { console.log(err) }
            })
            return 'functional'
        case 'Class/Stateful':
            const methodsToCopy = answers['lifecycleMethods']
            const indexToInsertMethods = classReactComponent.indexOf("render() {")
            const mappedMethods = methodsToCopy.map(method => lifecycleMethodsArray[method])
            const arrToWrite = [
                ...classReactComponent.slice(0, indexToInsertMethods - 1),
                ...mappedMethods,
                ...classReactComponent.slice(indexToInsertMethods, classReactComponent.length - 1)
            ]
            writeArrayToFile({ path, arr: arrToWrite })
            return 'class/stateful'
        default: 
            return 'Choice invalid'
    }
})


[['1', '2', '3']]

