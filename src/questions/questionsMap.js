module.exports = {
    component: [{
        type: 'list',
        name: 'componentType',
        choices: ['Functional', 'Class/Stateful'],
        message: 'Which type of component would you like to create?'
    }, {
        type: 'checkbox',
        name: 'lifecycleMethods',
        choices: [
            'getDerivedStateFromProps', 
            'shouldComponentUpdate', 
            'getSnapshotBeforeUpdate', 
            'componentDidUpdate', 
            'componentWillUnmount',
            'getDerivedStateFromError',
            'componentDidCatch'
        ],
        when: (answers) => answers.componentType === 'Functional'
    }, {
        type: 'input',
        name: 'fileDestination',
        message: 'Where would you like the component created? Please provide relative path (include filename): '
    }]
}