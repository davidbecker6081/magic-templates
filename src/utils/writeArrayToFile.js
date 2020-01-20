const fs = require('fs')
// const writeArrayToFile = ({ path, arr }) => {
//     fs.writeFile(
//         path,
//         JSON.stringify(arr),
//         (err) => { if (err) console.log(err)}
//     )
// }

const writeArrayToFile = ({ path, arr }) => {
    const strWithLineBreaks = arr.map((line) => line + '\n').join('')
    fs.writeFile(
        path,
        strWithLineBreaks,
        (err) => { if (err) console.log(err) }
    )
}

module.exports = writeArrayToFile
