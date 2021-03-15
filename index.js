const Controller = require("./controllers/Controller")
const command = process.argv.splice(2)

if (command[0] === 'show') {
    if (command[1] === 'employee:byName') {
        const name = command[2]
        Controller.readEmployeeByName(name)
    } else if (command[1] === 'project:above1B') {
        Controller.readProjectAbove1Billion()
    } else if (command[1] === 'project:numEmployeePerFeature') {
        Controller.readNumEmployeeInProjectFeature()
    } else if (command[1] === 'employee:sort') {
        const column = command[2]
        const sort = command[3]
        Controller.readEmployeeSort(column, sort)
    }
}