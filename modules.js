// we use require method to import files and packages into other files
const my_persons = require('./persons')
const {persons, ages} =require('./persons') // destructure properties from module object

console.log(my_persons.persons, my_persons.ages)
console.log(persons, ages)

// built in module to get information about the operating system
const os = require('os')
console.log(os.platform(), os.homedir())