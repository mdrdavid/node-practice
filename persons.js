const persons = ["david", "joan","emma"]
const ages = [30,34,35]

console.log(persons)

module.exports = persons

// exporting multiple items
module.exports = {
    persons: persons,
ages:ages
}