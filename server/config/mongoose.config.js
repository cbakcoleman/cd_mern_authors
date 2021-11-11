const mongoose = require("mongoose");

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then( () => console.log(`Connected to the ${DB} database`))
        .catch( err => console.log(`Unable to connect to the ${DB} database`))
}