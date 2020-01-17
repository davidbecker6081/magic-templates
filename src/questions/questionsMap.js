module.exports = [{
    type: 'list',
    name: 'componentType',
    choices: ['Functional', 'Class/Stateful'],
    message: 'Which type of component would you like to create?'
}, {
    type: 'input',
    name: 'fileDestination',
    message: 'Where would you like the component created? Please provide relative path (include filename): '
}]