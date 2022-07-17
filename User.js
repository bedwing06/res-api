const mongoose = require('mongoose')
const Users = mongoose.model('User', {
    name: { type: String, require: true, miLength: 3},
    lastname: { type: String, require: true, miLength: 3},
    
})

module.exports = Users