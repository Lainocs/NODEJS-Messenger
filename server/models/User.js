const mongooose = require('mongoose')

var schema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: String,
    status: String

})

const Userdb = mongooose.model('userdb', schema)

module.exports = Userdb